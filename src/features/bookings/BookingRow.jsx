import styled from 'styled-components';
import { format, isToday } from 'date-fns';

import Tag from '../../ui/Tag';
import Table from '../../ui/Table';

import { formatCurrency } from '../../utils/helpers';
import { formatDistanceFromNow } from '../../utils/helpers';
import Menus from '../../ui/Menus';
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { useCheckout } from '../check-in-out/useCheckout';
import { useDeleteBooking } from './useDeleteBooking';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';






function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();

  const { checkout, isCheckingOut } = useCheckout();
  const { isDeletingBooking, deleteBooking } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  };

  return (
    <Table.Row>
      <div className='font-medium font-[sono]'>{cabinName}</div>

      <div className='flex flex-col gap-0.5'>
        <span className='text-base'>{guestName}</span>
        <span className='text-slate-600 text-sm'>{email}</span>
      </div>

      <div className='flex flex-col gap-0.5'>
        <span className='text-base'>
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}{' '}
          &rarr; {numNights} night stay
        </span>
        <span className='text-slate-600 text-sm'>
          {format(new Date(startDate), 'MMM dd yyyy')} &mdash;{' '}
          {format(new Date(endDate), 'MMM dd yyyy')}
        </span>
      </div>

      <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

      <div className='text-lg font-[sono]'>{formatCurrency(totalPrice)}</div>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate('/bookings/' + bookingId)}
            >
              See details
            </Menus.Button>

            {status === 'unconfirmed' && (
              <Menus.Button
                icon={<HiArrowDownOnSquare  />}
                onClick={() => navigate('/checkin/' + bookingId)}
              >
                Check in
              </Menus.Button>
            )}

            {status === 'checked-in' && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )}

            <Modal.Open opens="delete">
              <Menus.Button
                icon={<HiTrash />}
                disabled={isDeletingBooking}
              >
                Delete booking
              </Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete resourceName='booking' onConfirm={() =>{

            deleteBooking(bookingId)}} />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;

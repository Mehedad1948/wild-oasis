import styled from 'styled-components';
import { format, isToday } from 'date-fns';
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from 'react-icons/hi2';

import DataItem from '../../ui/DataItem';
import { Flag } from '../../ui/Flag';

import { formatDistanceFromNow, formatCurrency } from '../../utils/helpers';

const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.header`
  background-color: var(--color-brand-500);
  padding: 1.5rem 2rem;
  color: #e0e7ff;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 10px;
  text-align: center;

  svg {
    height: 2.4rem;
    width: 2.4rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-weight: 600;
    font-size: 1rem;
  }

  & span {
    font-family: 'Sono';
    font-size: 1.2rem;
    margin-left: 4px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 1.6rem;
  border-radius: var(--border-radius-sm);
  margin-top: 1.2rem;

  background-color: ${(props) =>
    props.isPaid ? 'var(--color-green-100)' : 'var(--color-yellow-100)'};
  color: ${(props) =>
    props.isPaid ? 'var(--color-green-700)' : 'var(--color-yellow-700)'};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;

// A purely presentational component
function BookingDataBox({ booking = {} }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>
      </Header>

      <div className="px-4 py-3 md:px-8 md:py-6">
        <div className="flex flex-col gap-y-5 mt-3 sm:items-center gap-4 sm:flex-row">
          <div className="flex gap-2">
            {countryFlag && (
              <Flag src={countryFlag} alt={`Flag of ${country}`} />
            )}
            <p className="texts-sm lg:text-base">
              <span className="font-semibold"> {guestName} </span>{' '}
              {numGuests > 1 ? `+ ${numGuests - 1} guests` : ''}
            </p>
          </div>
          <div className="flex gap-2">
            <span>&bull;</span>
            <p>{email}</p>
          </div>
          <div className="flex gap-2">
            <span>&bull;</span>
            <p>National ID {nationalID}</p>
          </div>
        </div>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? 'Yes' : 'No'}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p className='!text-sm sm:!text-base lg:!text-lg'>{isPaid ? 'Paid' : 'Will pay at property'}</p>
        </Price>
      </div>

      <Footer>
        <p>Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;

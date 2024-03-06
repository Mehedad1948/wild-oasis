import Tag from '../../ui/Tag';
import Button from '../../ui/Button';
import CheckoutButton from './CheckoutButton';
import { Link } from 'react-router-dom';


function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;
  return (
    <li className="grid grid-cols-[5.5rem,1fr,4rem,6.5rem] items-center gap-1 md:gap-3 
        sm:px-1 text-sm py-1.5"
    >
      {status === 'unconfirmed' && <Tag type="green">Arriving</Tag>}
      {status === 'checked-in' && <Tag type="blue">Departing</Tag>}
      <div className='flex md:items-center gap-2 flex-col md:flex-row'>
      <img className='max-w-[30px] rounded-sm' src={guests.countryFlag} alt={`flag of ${guests.country}`} />
      <div className="font-medium">{guests.fullName}</div>
      </div>
      <div>{numNights} nights</div>

      {status === 'unconfirmed' && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Chek in
        </Button>
      )}
      {status === 'checked-in' && <CheckoutButton bookingId={id} />}
    </li>
  );
}

export default TodayItem;

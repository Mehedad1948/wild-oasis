import styled from 'styled-components';
import { useCabins } from '../cabins/useCabins';
import { useRecentBookings } from './useRecentBookings';
import Spinner from '../../ui/Spinner';
import { useRecentStays } from './useRecentStays';
import Stats from './Stats';
import SalesChart from './SalesChart';
import DurationChart from './DurationChart';
import TodayActivity from '../check-in-out/TodayActivity';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 1rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const {
    stays,
    isLoading: isLoading2,
    confirmedStays,
    numDays,
  } = useRecentStays();

  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading || isLoading2 | isLoading3) return <Spinner />;

  return (
    <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-[repeat(5,_auto)]
           lg:grid-rows-[auto,_auto,_auto] gap-2 
        lg:gap-3' >
     
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </div>
  );
}

export default DashboardLayout;

import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getBookingsAfterDate } from '../../services/apiBookings';

export function useRecentBookings(params) {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'));

  const queyDate = subDays(new Date(), numDays).toISOString();
//    numDays days before today

  const { isLoading, data: bookings } = useQuery({
    queryFn: () => getBookingsAfterDate(queyDate),
    queryKey: ['bookings', `last-${numDays}`],
  });

  return {isLoading, bookings}
}

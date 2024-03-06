import { useContext, useEffect } from 'react';
import BookingTable from '../features/bookings/BookingTable';
import BookingTableOperations from '../features/bookings/BookingTableOperations';
import { store } from '../ContextProvider';
function Bookings() {
  const { setPageTitle } = useContext(store);

  useEffect(() => {
    setPageTitle('All bookings');
  }, []);
  return (
    <>
      <div className="flex items-center">
        <BookingTableOperations />
      </div>
      <BookingTable />
    </>
  );
}

export default Bookings;

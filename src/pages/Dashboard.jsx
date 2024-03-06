import DashboardLayout from '../features/dashboard/DashboardLayout';
import DashboardFilter from '../features/dashboard/DashboardFilter';
import { useContext, useEffect } from 'react';
import { store } from '../ContextProvider';

function Dashboard() {
  const { setPageTitle } = useContext(store);

  useEffect(() => {
    setPageTitle('Dashboard');
  }, []);
  return (
    <>
      <div className="flex items-center justify-between ">
        <DashboardFilter />
      </div>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;

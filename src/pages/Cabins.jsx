import { useContext, useEffect } from 'react';
import AddCabins from '../features/cabins/AddCabins';
import CabinTable from '../features/cabins/CabinTable';
import CabinTableOperations from '../features/cabins/CabinTableOperations';
import Row from '../ui/Row';
import { store } from '../ContextProvider';

function Cabins() {
  const { setPageTitle } = useContext(store);

  useEffect(() => {
    setPageTitle('All cabins');
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <CabinTableOperations />
      </div>
      <Row>
        <CabinTable />
        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;

// import { HiArrowRightOnRectangle } from 'react-icons';
import ButtonIcon from '../../ui/ButtonIcon';
import SpinnerMini from '../../ui/SpinnerMini';
import { useLogout } from './useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {/* <HiArrowRightOnRectangle /> */}
      {!isLoading ? 'Logout' : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;

import { useNavigate } from 'react-router-dom';
import ButtonIcon from './ButtonIcon';
import { HiOutlineUser } from 'react-icons/hi2';
import Logout from '../features/authentication/Logout';
import { styled } from 'styled-components';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

function HeaderMenu() {
  return (
    <ul className='flex gap-1.5'>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;

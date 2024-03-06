import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUser,
} from 'react-icons/hi2';

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function MainNav() {
  return (
    <nav className="mt-8 ">
      <NavList className='mt-2'>
        <li>
          <NavLink className="navLink" to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users">
            <HiOutlineUser />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;

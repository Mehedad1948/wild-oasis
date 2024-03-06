import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';
import { useContext } from 'react';
import { store } from '../ContextProvider';

function Header() {
  const { pageTitle } = useContext(store);
  return (
    <header
      className="flex items-center justify-between gap-5 border-b bg-white px-5
           py-2.5 md:px-8 lg:py-3.5"
    >
      <div className="flex items-center gap-4 pl-6 lg:pl-0">
       
        <h1 className="text-xl font-medium ">{pageTitle}</h1>
      </div>
      <div className="flex items-center">
        <UserAvatar />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;

import Uploader from '../data/Uploader';
import Logo from './Logo';
import MainNav from './MainNav';
import { AiOutlineMenu } from 'react-icons/ai';

function Sidebar({ show, setShowsidebar }) {
  return (
    <aside
      className={
        (show ? '!translate-x-0 fixed' : '-translate-x-full') +
        ' ' +
        `z-50 row-span-full min-h-screen flex min-w-[250px] -translate-x-full flex-col
         border-r bg-white px-9 py-4 transition-transform justify-center
          duration-300 lg:relative lg:ml-0 lg:flex lg:translate-x-0`
      }
    >
      <button
        className="block lg:hidden absolute top-3 -right-8 bg-white rounded px-1 aspect-square 
         focus:!outline-none"
        onClick={() => setShowsidebar((s) => !s)}
      >
        <AiOutlineMenu />
      </button>
      <Logo />
      <MainNav />
      <Uploader />
    </aside>
  );
}

export default Sidebar;

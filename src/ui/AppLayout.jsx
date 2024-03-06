import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { styled } from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  max-width: 120rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function AppLayout() {
  const [showSidebar, setShowsidebar] = useState(false);

  return (
    <div
      className={`grid h-screen grid-cols-[0,_1fr] grid-rows-[auto,_1fr] overflow-hidden 
                bg-gray-50 transition-all duration-300 lg:grid-cols-[15rem,_1fr]`}
    >
      <Header />
      <Sidebar setShowsidebar={setShowsidebar} show={showSidebar} />

      <main className="overflow-y-scroll px-3 py-1 sm:px-6 sm:py-3 ">
        {showSidebar && (
          <div
            className="fixed lg:hidden z-20 h-screen w-screen bg-slate-900/40 backdrop-blur-sm
        "
          ></div>
        )}
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
}

export default AppLayout;

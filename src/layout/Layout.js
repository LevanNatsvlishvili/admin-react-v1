import React from 'react';
import { Outlet } from 'react-router-dom';
import LayoutTopbar from './LayoutTopbar';
import LayoutNavigation from './NavTree';

const Layout = () => {
  return (
    <div className="flex">
      <header className="flex">
        <nav>
          <div className="w-26-0 h-100-vh bg-white">
            <div className="text-blue uppercase font-500 text-2-2 leading-2-4 px-2-8 py-2-4">
              Saba
            </div>
            <div className="pt-1-0 p-1-6 overflow-auto">
              <LayoutNavigation />
            </div>
          </div>
        </nav>
      </header>
      <div className="w-full">
        <LayoutTopbar />

        <main className="w-full p-1-6">{<Outlet />}</main>
      </div>
    </div>
  );
};

export default Layout;

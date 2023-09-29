import React from 'react';
import AccountMenu from './Logout';

function LayoutTopbar() {
  return (
    <div className="p-1-6">
      <div className="w-full h-6-0 bg-white flex items-center px-2-0 rounded-1-2">
        <div className="ml-auto">
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}

export default LayoutTopbar;

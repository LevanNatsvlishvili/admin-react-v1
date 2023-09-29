import * as React from 'react';
import { SvgIcon } from '@mui/material';
import { NavLink } from 'react-router-dom';

const paddingLeft = {
  0: 'pl-1-5',
  1: 'pl-3-0',
  2: 'pl-4-5',
  3: 'pl-6-0',
  4: 'pl-7-0',
  5: 'pl-8-0',
};

const navLinkState = {
  default: 'flex items-center text-grey py-0-8 duration-300 navlink my-0-6',
  active:
    'navlink-active flex items-center text-white py-0-8 duration-300 my-0-6',
};

function NavItem({ node, parent }) {
  return (
    <NavLink
      to={node.url}
      end
      className={({ isActive }) =>
        `${paddingLeft[parent?.length || 0]} ${
          navLinkState[isActive ? 'active' : 'default']
        }`
      }
    >
      <SvgIcon className="empty:hidden mr-1-0" fontSize="large">
        {node.icon}
      </SvgIcon>
      {node.title}
    </NavLink>
  );
}

export default NavItem;

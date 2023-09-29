import React from 'react';
import { styled } from '@mui/material/styles';
import TreeItem from '@mui/lab/TreeItem';
import { SvgIcon } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { NavLink } from 'react-router-dom';

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '2.6rem',
  '& .MuiTreeItem-iconContainer': {
    display: 'none!important',
  },
  '& ul': {
    marginLeft: 0,
  },
  '& .MuiTreeItem-content': {
    padding: 0,
    background: 'transparent!important',
    backgroundColor: 'transparent!important',
  },
  '& .MuiTreeItem-content:hover, .Mui-expanded, .Mui-selected': {
    background: 'transparent!important',
    backgroundColor: 'transparent!important',
  },
  '&  .Mui-selected': {
    background: 'transparent!important',
  },
  '& .Mui-expanded .dropdown-icon ': {
    transform: 'rotate(90deg)',
  },
}));

const navLinkState = {
  default:
    'flex items-center text-grey py-0-8 duration-300 navlink my-0-4 px-1-5',
  active:
    'navlink-active flex items-center text-white py-0-8 duration-300 my-0-4 px-1-5',
};

export default function NavTreeItem(props) {
  const { node, parent, renderTree, nodeId, ...other } = props;

  return (
    <StyledTreeItemRoot
      nodeId={nodeId}
      label={
        <NavTreeItemContainer
          parent={parent}
          type={node.url ? 'link' : 'collapse'}
          to={node.url ? node.url : false}
          {...other}
        >
          {node.icon && (
            <SvgIcon className="empty:hidden mr-1-0" fontSize="medium">
              {node.icon}
            </SvgIcon>
          )}
          <p className="text-1-6 text-inherit">{node.title}</p>
          {node.children && (
            <ArrowForwardIosSharpIcon className="absolute right-1-5 !text-1-2 dropdown-icon " />
          )}
        </NavTreeItemContainer>
      }
      {...other}
      className="relative"
    />
  );
}

const paddingLeft = {
  0: 'pl-1-5',
  1: 'pl-3-0',
  2: 'pl-4-5',
  3: 'pl-6-0',
  4: 'pl-7-0',
  5: 'pl-8-0',
};

const NavTreeItemContainer = ({ type, children, to, parent }) => {
  if (type === 'link') {
    return (
      <NavLink
        to={to}
        end
        className={({ isActive }) => `
          ${navLinkState[isActive ? 'active' : 'default']}
          ${paddingLeft[parent?.length || 0]}
        `}
      >
        {children}
      </NavLink>
    );
  }
  return (
    <div
      className={`
        ${navLinkState.default}
        ${paddingLeft[parent?.length || 0]}
      `}
    >
      {children}
    </div>
  );
};

import navigation from 'navigation';
import React, { useEffect, useState } from 'react';
import TreeView from '@mui/lab/TreeView';
import { useLocation } from 'react-router-dom';
import NavTreeItem from './NavTreeItem';

export default function LayoutNavigation() {
  const [activeMenu, setActiveMenu] = useState([]);

  const renderTree = (nodes, parent) => {
    return nodes.map((node, i) => {
      if (node.header) {
        return (
          <div
            key={node.id || i}
            className="pl-2-0 text-grey-light uppercase text-1-1 font-700 leading-1-5 py-1-2"
          >
            {node.header}
          </div>
        );
      }

      if (node.children) {
        return (
          <NavTreeItem
            key={node.id || i}
            node={node}
            parent={parent}
            nodeId={node.id}
          >
            {node.children &&
              renderTree(
                node.children,
                parent?.length > 0 ? [...parent, node.id] : [node.id]
              )}
          </NavTreeItem>
        );
      }

      // return <StyledTreeItem key={node.id || i} node={node} nodeId={node.id} />;

      return (
        <NavTreeItem
          key={node.id || i}
          node={node}
          parent={parent}
          nodeId={node.id}
        />
      );
    });
  };

  const location = useLocation();
  const currRoute = location.pathname;

  function isActive(nodes, parent) {
    let parentArr = [];
    if (parent && parent.length > 0) {
      parentArr = [...parent, nodes.id];
    }
    if (nodes.id !== undefined && parent.length < 1) {
      parentArr = [nodes.id];
    }
    if (Array.isArray(nodes)) {
      nodes.forEach((node) => {
        isActive(node, parentArr);
      });
      return;
    }
    if (nodes.children) {
      isActive(nodes.children, parentArr);
      return;
    }
    if (currRoute === nodes.url) {
      const filtered = parentArr.filter((row) => row !== undefined);
      setActiveMenu([...filtered]);
      return;
    }
  }

  useEffect(() => {
    isActive(navigation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TreeView
      onNodeToggle={(e, ids) => setActiveMenu(ids)}
      expanded={activeMenu}
    >
      {renderTree(navigation)}
    </TreeView>
  );
}

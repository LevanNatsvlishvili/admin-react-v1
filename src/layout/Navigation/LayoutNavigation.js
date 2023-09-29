import * as React from 'react';
import navigation from 'navigation';

import CollapsibleItem from './Components/CollapsibleItem';
import NavItem from './Components/NavItem';

export default function LayoutNavigation() {
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
          <CollapsibleItem
            key={node.id || i}
            node={node}
            parent={parent}
            renderTree={renderTree}
          />
        );
      }
      return <NavItem key={node.id || i} node={node} parent={parent} />;
    });
  };

  return <div>{renderTree(navigation)}</div>;
}

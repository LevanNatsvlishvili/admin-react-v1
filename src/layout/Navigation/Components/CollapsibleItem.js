import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { SvgIcon } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  color: 'inherit',
  background: 'transparent',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const paddingLeft = {
  0: 'pl-1-5',
  1: 'pl-3-0',
  2: 'pl-4-5',
  3: 'pl-6-0',
  4: 'pl-7-0',
  5: 'pl-8-0',
};

export default function CollapsibleItem({ node, parent, renderTree }) {
  const location = useLocation();
  const currRoute = location.pathname;

  const [isOpen, setOpen] = useState([]);

  function isActive(nodes) {
    if (Array.isArray(nodes)) {
      nodes.forEach((node) => {
        isActive(node);
      });
      return;
    }
    if (nodes.children) {
      isActive(nodes.children);
      return;
    }
    if (currRoute === nodes.url) {
      // console.log(nodes.url);
      // console.log(currRoute);
      setOpen(node.id);
      return;
    }
  }

  React.useEffect(() => {
    // isActive(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // const handleChange = (id) => {
  //   // if (!isOpen) return;
  //   if (isOpen === id) {
  //     console.log('first line');
  //     setOpen('');
  //     return;
  //   }
  //   // console.log(id);
  //   if (isOpen !== id) {
  //     console.log('second line');
  //     setOpen(id);
  //   }
  // };

  const handleChange = (id) => {
    if (parent) {
      setOpen([...parent, id]);
      return;
    }
    console.log(isOpen.includes(id));
    if (isOpen.includes(id)) {
      const newArr = isOpen.filter((node) => node === id);
      console.log(isOpen);
      console.log(id);
      // setOpen(newArr);
      return;
    }

    setOpen([id]);
  };

  if (node.id === 'blogBrowse3') {
    // console.log(isOpen);
    // console.log(node.id);
    // console.log('_______');
  }

  useEffect(() => {
    if (parent) {
      setOpen([...parent]);
    }
  }, []);

  // console.log(parent);
  return (
    <Accordion
      className="my-0-6"
      expanded={isOpen.includes(node.id)}
      onClick={(e) => handleChange(node.id)}
    >
      <AccordionSummary className="text-grey navlink duration-300 ">
        <div
          className={`${
            paddingLeft[parent?.length || 0]
          } flex items-center text-grey py-0-8 duration-300 `}
        >
          <SvgIcon className="empty:hidden mr-1-0" fontSize="large">
            {node.icon}
          </SvgIcon>
          {node.title}
        </div>
      </AccordionSummary>

      <AccordionDetails>
        {node.children &&
          isOpen.includes(node.id) &&
          renderTree(
            node.children,
            parent?.length > 0 ? [...parent, node.id] : [node.id]
          )}
      </AccordionDetails>
    </Accordion>
  );
}

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: '0.9rem',
          transform: 'rotate(90deg)',
          color: '#625f6e',
        }}
      />
    }
    {...props}
  />
))({
  height: '40px',
  padding: 0,
  paddingRight: '16px',
  minHeight: '40px',
  color: 'inherit',
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
  '& .MuiSvgIcon-root': {
    color: '#625f6e',
  },
  '&:hover .MuiSvgIcon-root': {
    color: '#fff',
  },
});

const AccordionDetails = styled(MuiAccordionDetails)({
  padding: 0,
  '& .MuiAccordionSummary-content': { padding: 0 },
});

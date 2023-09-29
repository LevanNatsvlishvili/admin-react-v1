import { Button } from '@mui/material';
import React from 'react';

function Btn(props) {
  const { children } = props;
  return (
    <Button
      variant="contained"
      color="primary"
      className="h-4-0 !text-1-4 !leading-2-0"
      fullWidth
    >
      {children}
    </Button>
  );
}

export default Btn;

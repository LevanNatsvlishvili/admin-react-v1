import React from 'react';
import Routing from 'routing';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'commons/muiTheme/Theme';
import { GlobalProvider } from 'context/globalContext';

function App() {
  return (
    <div>
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <Routing />
        </ThemeProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Portfolio } from './portfolio/Portfolio';
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './portfolio/Theme/theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Portfolio/>
    </ThemeProvider>
  )
}

export default App;

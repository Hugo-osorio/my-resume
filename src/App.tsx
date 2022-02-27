import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './colors';
import './components/Navbar/MobileMenuStyles.css';


const App = () => {
  const [ value, setValue ] = useState(false);

  const handleClick = () => {
    setValue(prev => !prev);
  }
  return <ThemeProvider theme={theme}>
    <Navbar />
    <Hero />
    <div className={`${darkTheme.tertiary} h-[100rem] opacity-100 text-black`}>
      <div className='text-[20rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-secondary to-tertiary opacity-20 text-clip overflow-hidden whitespace-nowrap'>
        Hugo Osorio
      </div>
    </div>
  </ThemeProvider>
}

export default App;

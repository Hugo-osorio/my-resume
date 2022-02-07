import React, { useState } from 'react';
import { Button } from '@mui/material';

const App = () => {
  const [ value, setValue ] = useState(false);

  const handleClick = () => {
    setValue(prev => !prev);
  }

  return <div className='flex justify-around mt-[40px]'><Button variant="contained" onClick={handleClick}>Button</Button><div className={`${value ? 'bg-red-200' : 'bg-blue-200'} inline-block p-2`}>Tailwind</div></div>;
}

export default App;

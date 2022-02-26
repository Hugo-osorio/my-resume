import React, { useEffect, useState } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import MobileNavbarMenu from './MobileNavbarMenu';
import { darkTheme } from '../../colors';

type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = (props) => {
  
  const [ value, setValue ] = useState(false);
  const [ showMenu, setShowMenu ] = useState(false);

  const handleMobileClick = () => {
    setShowMenu(prev => !prev)
  }

  const handleScroll = () => {
    setValue(window.scrollY > 0 ? true : false)
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  })
 
  const navbarColor = darkTheme.secondary;
  const navbarShadow = value ? `${navbarColor} shadow-[0px_1px_10px_#111]` : 'bg-transparent' ;

  return <>
    {/* Mobiile Navbar */}
    <nav id='navbar' onScroll={handleScroll} className={`w-full h-[68px] z-30 fixed block flex justify-between duration-[200ms] transition delay-75 ease-linear md:hidden ${navbarShadow}`}>
      <button className='mx-[1rem]' onClick={handleMobileClick}>
        <DehazeIcon color='primary'/>
      </button>
      <span className={`font-extrabold text-xl my-auto mx-[1rem] ${darkTheme.fontColor}`}>{'<Hugo />'}</span>
      <MobileNavbarMenu showModal={showMenu} handleClick={handleMobileClick}/>
    </nav>
    {/* Desktop Navbar */}
    <nav className={`w-full justify-between h-[68px] transition delay-75 z-30 ease-linear hidden fixed md:flex ${navbarShadow}`}>
      <span className={`font-extrabold text-xl my-auto mx-[1rem] ${darkTheme.fontColor}`}>{'<Hugo />'}</span>
      <div className="my-auto mx-4">
        <a className={`mx-2 rounded-md py-1 px-2 border-2 border-transparent hover:bg-primary hover:border-secondary`}>About</a>
        <a className={`mx-2 rounded-md py-1 px-2 border-2 border-transparent hover:bg-primary hover:border-secondary`}>Skills</a>
        <a className={`mx-2 rounded-md py-1 px-2 border-2 border-transparent hover:bg-primary hover:border-secondary`}>Contact</a>
      </div>
    </nav> 
    
  </>;
};

export default Navbar;

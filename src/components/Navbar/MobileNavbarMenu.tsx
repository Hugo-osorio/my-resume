import React, { useEffect, useRef, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import './MobileMenuStyles.css';

type MobileNavbarMenuProps = {
    showModal: boolean;
    handleClick: () => void
};

const MobileNavbarMenu: React.FC<MobileNavbarMenuProps> = ({ showModal, handleClick }) => {

  const menuColor = '#D8E3E7'

  const BackgroundStyles: Record<string, string> = {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    transition: 'all ease-in 0.3s',
    ...(showModal ? {} : {
      opacity: '0',
      visibility: 'hidden'
    })
  };

  const ContainerStyles: Record<string, string> = {
    width: '75%',
    backgroundColor: menuColor,
    height: '100%',
    position: 'absolute',
    left: '0rem',
    top: '0',
    transition: 'all ease-in 0.1s',
    ...(showModal ? {} : {
      left: '-100%'
    })
  };

  return (
    <>
      <div style={BackgroundStyles}>
      <button onClick={handleClick} style={{
        position: 'absolute',
        right: '10px',
        top: '10px'
      }}>
        <CloseIcon />
      </button>
        <div style={ContainerStyles}>
          <div className='w-full h-full flex flex-col items-center'>
            <button className='text-primary font-bold py-6 bg-quaternary border-b-[1px] border-primary w-[80%]' onClick={()=>{}}>About</button>
            <button className='text-primary font-bold py-6 bg-quaternary border-b-[1px] border-primary w-[80%]' onClick={()=>{}}>Skills</button>
            <button className='text-primary font-bold py-6 bg-quaternary border-b-[1px] border-primary w-[80%]' onClick={()=>{}}>Contact</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default MobileNavbarMenu;
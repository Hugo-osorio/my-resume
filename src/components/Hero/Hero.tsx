import React from 'react'
import Hugo from '../../images/Hugo.jpg';
import { darkTheme } from '../../colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type HeroProps = {}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {

  const heroColor = darkTheme.primary;
  const backgroundImage = darkTheme.secondary;
  const fontColor = darkTheme.fontColor;
    //after:absolute after:content-[''] after:h-[2rem] after:w-[2rem] after:bg-red-500 after:bottom-[2px] after:
  return (
    
    <div className={`overflow-hidden h-screen ${heroColor}`}>
      {/* Mobile Hero*/}
      <div className='flex flex-col items-center justify-around h-[inherit]'>
        <div className='mx-[5rem] my-[2rem]'>
            <h3 className={`text-xl ${fontColor}`}>
            ¡Hi! My name is
            </h3>
            <h1 className={`text-7xl font-extrabold ${fontColor}`}>
            Hugo Osorio
            </h1>
        </div>
        <div className='w-screen flex items-center h-[20rem] justify-around relative'>
            <div className={`absolute h-[10rem] w-screen top-[25%] left-0 ${backgroundImage}`}/>
            <div className={`w-[20rem] rounded-full z-10 ${backgroundImage}`}>
                <img src={Hugo} alt="Hugo Osorio" className="w-fit p-[2rem] rounded-full"></img>
            </div>
            
        </div>
        <div className='rounded-full bg-secondary w-fit animate-bounce'>
            <ExpandMoreIcon />
        </div>
      </div>
      {/* Desktop Hero*/}
    </div>
  )
}

export default Hero
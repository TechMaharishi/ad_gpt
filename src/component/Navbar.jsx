import React from 'react'
import { ButonNavAds, ButtonAvatar, ButtonDropDown, ButtonLogo, ButtonNavHome, ButtonTogglerMode } from './ui/Button';
import { TfiWorld } from "react-icons/tfi";
import Card from './ui/Card';
import CardImageLeft from './ui/CardImageLeft';
import PromptInputBar from './ui/PromptInputBar';

export function Navbar() {
  
  return (
    <div className='h-[76px] w-full bg-[#3F51B5] flex items-center justify-center'>
      {/* <ButtonLogo/> */}
      {/* <ButtonNavHome/> */}
      <ButonNavAds/>
      <span className="absolute w-[175px] h-[23px] top-[27px] left-[376px] text-white text-[18px] font-semibold leading-[100%]">
  Ad Creatives History
</span>
    
      {/* <>
      <span className='text-white m-2'><TfiWorld/></span>
      <p className='text-[#FFFFFF'>English</p>
      <ButtonDropDown/>
      </> */}


{/* <div className="absolute top-[31px] left-[1217px] w-[90px] h-[18px] flex items-center gap-1">
      <span className="w-[14.63px] h-[14.63px] border-[0.8px] flex items-center justify-center text-white">
        <TfiWorld className="w-full h-full" />
      </span>
      <p className="w-[47px] h-[18px] text-[14px] font-medium leading-[100%] text-white">
        English
      </p>
      
    </div>
    <ButtonDropDown /> */}


      {/* <ButtonTogglerMode/> */}
      {/* <ButtonAvatar/> */}

      {/* <Card/> */}

      {/* <CardImageLeft/> */}
      {/* <PromptInputBar/> */}
    </div>
  );
}


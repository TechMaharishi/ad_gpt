import React from 'react'
import { ButonNavAds, ButtonDropDown, ButtonNavHome, ButtonTogglerMode } from './ui/Button';
import { TfiWorld } from "react-icons/tfi";

export function Navbar() {
  
  return (
    <div className='h-[76px] w-full bg-[#3F51B5] flex items-center justify-center'>
      <ButtonNavHome/>
      <ButonNavAds/>
      <>
      <span className='text-white m-2'><TfiWorld/></span>
      <p>English</p>
      <ButtonDropDown/>
      </>
      <ButtonTogglerMode/>
    </div>
  );
}


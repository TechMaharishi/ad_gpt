import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

export function ButtonNavHome(props) {

  return (
    <button className='bg-gradient-to-r from-[#C85ED8] to-[#A079F8] text-white py-2 w-24 m-2 rounded-full outline-none'>Home</button>
  );
}

export function ButonNavAds() {
  return(
    <button className='bg-gradient-to-r from-[#C85ED8] to-[#A079F8] flex items-center justify-center text-white gap-1 w-[225px] rounded-full outline-none'>  
    
    <span><img src="/adslogo.png" className="font-extrabold" alt="Ads Logo" /></span>
    Emulate Competitor Ads
    
    </button>
  )
}

export function ButtonDropDown(){
  return(<button className='text-white text-md'>
    <MdKeyboardArrowDown/>
  </button>
  )
}

export function ButtonTogglerMode() {
  return(
    <button className='text-2xl'>Button Toggler</button>
  )
}


export function ButtonAvatar(){
  return(
    <p className="border-2 font=[600] text-[16px] w-[50px] h-[50px]">AH</p>
  )
}
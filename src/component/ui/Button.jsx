import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";


export function ButtonLogo(){
  return (
    <a href="/" className="absolute top-[13px] left-[34px] w-[161px] h-[49px]">
    <img src="./logo.png" alt="Logo" className="w-full h-full object-contain" />
  </a>
);
}
export function ButtonNavHome() {
  return (
    <button className="absolute top-[17px] left-[245px] w-[101px] h-[42px] bg-gradient-to-r from-[#C85ED8] to-[#A079F8] text-white rounded-[32px] backdrop-blur-[14.9px] flex items-center justify-center">
      Home
    </button>
  );
}

// export function ButonNavAds() {
//   return(
//     <button className='bg-gradient-to-r from-[#C85ED8] to-[#A079F8] flex items-center justify-center text-white gap-1 w-[225px] rounded-full outline-none'>  
    
//     <span><img src="/adslogo.png" className="font-extrabold" alt="Ads Logo" /></span>
//     Emulate Competitor Ads
    
//     </button>
//   )
// }

export function ButonNavAds() {
  return (
    <button className="absolute top-[24px] left-[1020px] w-[175px] h-[31px] bg-gradient-to-r from-[#C85ED8] to-[#6D3DDA] rounded-full flex items-center px-2 gap-2">
      <img
        src="/adslogo.png"
        alt="Ads Logo"
        className="w-[22px] h-[26px]"
      />
      <span className="w-[128px] h-[14px] text-white text-[11px] font-semibold leading-[100%]">
        Emulate Competitor Ads
      </span>
    </button>
  );
}


export function ButtonDropDown() {
  return (
    <button className="w-[12px] h-[12px] absolute top-[47px] left-[1295px]  text-white">
      <MdKeyboardArrowDown />
    </button>
  );
}



// export function ButtonDropDown(){
//   return(<button className='text-white text-md'>
//     <MdKeyboardArrowDown/>
//   </button>
//   )
// }

export function ButtonTogglerMode() {
  return(
  //   <div className="w-16 h-8 rounded-full bg-[#1E1B4B] flex items-center px-1 border border-purple-400">
  //   <div className="w-6 h-6 bg-[#FDE68A] rounded-full ml-auto"></div>
  // </div>

  <div className="absolute top-[23px] left-[1322px]">
  <div className="w-[60px] h-[31px] rounded-[15.5px] border-[0.5px] bg-gradient-to-r from-[#C85EDB] to-[#A079F8] p-[1px]">
    <div className="w-full h-full bg-[#1F296A] rounded-[15.5px] flex items-center px-[2px]">
      <div className="w-[17.5px] h-[18.29px] bg-[#F4DC9F] rounded-full ml-auto"></div>
    </div>
  </div>
</div>
  )
}


export function ButtonAvatar(){
  return(
    // <p className="p-[2px] rounded-full bg-gradient-to-r from-[#C85ED8] to-[#A079F8] font=[600] text-[16px] w-[50px] h-[50px] text-[#FFFFFF] bg-gray-500 flex items-center justify-center">AH</p>

    <div className="absolute top-[13px] left-[1402px]">
    <div className="p-[2px] w-[50px] h-[50px] rounded-full bg-gradient-to-r from-[#C85ED8] to-[#A079F8]">
      <div className="w-full h-full bg-[#3F51B5] rounded-full flex items-center justify-center">
        <span className="text-white text-[16px] leading-[100%] font-semibold">AH</span>
      </div>
    </div>
  </div>

  )
}
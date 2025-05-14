import React, { useState } from 'react';
import { Navbar } from '@/component/Navbar';
import { Menu } from '@/component/Menu';
import { PromptBox } from '@/component/PromptBox';
import { IoMenu } from 'react-icons/io5';

export function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className="relative h-[110vh]">
      <Navbar toggleMenu={toggleMenu} />
      <div className="absolute top-[5.688rem] left-0 z-40">
        <Menu isOpen={menuOpen} />
      </div>

      <div className='overflow-y-auto border border-amber-400 w-full lg:w-[calc(100vw-20rem)] h-[47rem] p-5 m-0 lg:ml-[18rem]'>

        {/* Put the things here  */}
        
      </div>

      <div className='px-5 bottom-10 absolute flex justify-center w-full pb-6  lg:w-[calc(100vw-20rem)] m-0 lg:ml-[18rem]'>
        <PromptBox />        
      </div>
    </div>
  );
}

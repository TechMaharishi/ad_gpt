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
    <div className=" min-h-[118svh] relative">

      <Navbar toggleMenu={toggleMenu} />
      <div className="absolute top-[5.688rem] left-0 z-40">
        <Menu isOpen={menuOpen} />
      </div>

      {/* <PromptBox /> */}
    </div>
  );
}

import React from 'react'
import { Navbar } from '@/component/Navbar';
import { Menu } from '@/component/Menu';
import { PromptBox } from '@/component/PromptBox';

export function Home() {

  return (
    <div className='min-h-[118svh]'>
      <Navbar />
      <div className='absolute top-[5.688rem] left-[0.938rem]'>
      <Menu />
      </div>      
      <PromptBox />
    </div>
  );
}
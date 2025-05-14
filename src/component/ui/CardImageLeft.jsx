
import React from 'react';
import { FiEdit2, FiMoreVertical } from 'react-icons/fi';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { BiCopy } from 'react-icons/bi';

const CardImageLeft = () => {
  return (
    <div className="absolute top-[705px] left-[522px] w-[622px] h-[203px] rounded-[21.75px] flex overflow-hidden bg-[#324094] backdrop-blur-[2.9px] shadow-md">
      
      {/* Left Side Image */}
      <div className="relative w-[207px] h-[203px] rounded-tl-[15px] rounded-bl-[15px] overflow-hidden">
        <img 
          src="./genielogo.jpg" 
          alt="Card Visual"
          className="w-full h-full object-cover"
        />
        
        {/* Edit Icon */}
        <div className="absolute top-[7px] left-[166px] w-[29px] h-[29px] bg-[#1F296A] border border-[#1F296A] rounded-[5px] flex items-center justify-center">
          <FiEdit2 className="text-white w-[10.5px] h-[10.5px]" />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="relative w-[415px] h-[203px] px-4 py-3 flex flex-col justify-start">
        
        {/* Top-right line icon */}
        <div className="absolute top-[7px] right-[10px] w-[29px] h-[29px] bg-[#1F296A] border border-[#1F296A] rounded-[5px] flex items-center justify-center">
          <FiMoreVertical className="text-white w-[20px] h-[20px] rotate-90" />
        </div>

        {/* Title */}
        <h3 className="text-[#C5BCFF] text-[18px] font-medium leading-[100%] tracking-[0%] mb-2 mt-[8px]">
          Title Name
        </h3>

        {/* Description */}
        <p className="text-white text-opacity-80 text-[12px] font-[400] leading-[100%] w-[383px] h-[56px] mt-[10px]">
          Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae Elit Sit Tellus Massa Sit Morbi Pharetra. Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae.
        </p>

        {/* Bottom Right Icons */}
        <div className="absolute bottom-[8px] right-[12px] flex gap-3">
          {/* Speaker */}
          <div className="w-[20px] h-[20px] flex items-center justify-center">
            <HiOutlineSpeakerWave className="w-[16px] h-[15.99px] text-[#C85ED8]" />
          </div>

          {/* Copy */}
          <div className="w-[26px] h-[26px] flex items-center justify-center">
            <BiCopy className="w-[19.5px] h-[19.5px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardImageLeft;

import React from 'react';
import { FaBolt } from 'react-icons/fa6'; // Sample icon for the 'Generate' button

const PromptInputBar = () => {
  return (
    <div className="absolute top-[914px] left-[437px] w-[921px] h-[101px] rounded-[10px] border border-white/20 backdrop-blur-[14.9px] bg-gradient-to-r from-[#3F51B5] to-[#673AB7] p-[25px] flex justify-between items-start">
      
      {/* Left Content */}
      <div className="flex flex-col gap-2">
        {/* Prompt Label */}
        <p className="text-white text-[16px] italic leading-[100%] tracking-[0%]">
          Prompt
        </p>

        {/* Placeholder Text */}
        <p className="text-white text-opacity-50 text-[18px] italic font-[400] leading-[100%] tracking-[0%]">
          Describe your ad copy. Get creative.....
        </p>
      </div>

      {/* Right Button */}
      <button className="w-[156px] h-[47px] outline-none border-none p-0">
        <div className="w-[156px] h-[44px] rounded-[26.5px] border border-[#C85ED8] bg-[#1F296A] flex items-center px-[8px] gap-2">
          {/* Icon */}
          <div className="w-[43px] h-[43px] flex items-center justify-center">
            {/* <FaBolt className="text-yellow-400 text-[20px]" /> */}
            <img src="./searchlogo.png" alt="Search Logo" className='text-yellow-400 text-[20px]' />
          </div>
          {/* Generate Text */}
          <div className="w-[70px] h-[20px] flex items-center justify-end">
            <p className="text-white text-[16px] font-medium leading-[100%] text-right">
              Generate
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default PromptInputBar;

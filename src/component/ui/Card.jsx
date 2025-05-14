// import React from 'react';
// import { FiEdit2, FiMoreVertical } from 'react-icons/fi';
// import { HiOutlineSpeakerWave } from 'react-icons/hi2';
// import { BiCopy } from 'react-icons/bi';

// const Card = ({ hasImage }) => {
//   return (
//     <div className="bg-[#2D2A7D] mt-68 rounded-xl text-white p-4 flex flex-col sm:flex-row gap-4 sm:items-stretch w-full max-w-5xl mx-auto shadow-md">
      
//     {/* Left Text Block */}
// <div className="relative w-[204.45px] h-[203px] bg-gradient-to-b from-[#3F51B5] to-[#673AB7] rounded-tl-[15px] rounded-bl-[15px] backdrop-blur-[14.9px]">
//   <p className="absolute top-[34px] left-[4.83px] w-[193.09px] h-[133px] text-white text-[13px] leading-[147%] font-semibold text-center font-[Public Sans]">
//     I’m still Learning and can’t create everything yet, especially photorealistic images of people or things that go against my guidelines. Let me know if you’d like to try something else!
//   </p>

//   <button className="absolute top-2 right-2 bg-white/20 hover:bg-white/30 p-1 rounded-full text-white">
//     <FiEdit2 size={14} />
//   </button>
// </div>


//     {/* Right Content */}
//     <div className="flex-1 flex flex-col justify-between">
//       <div className="flex justify-between items-start">
//         <h3 className="text-base sm:text-lg font-semibold">Title Name</h3>
//         <FiMoreVertical className="text-white mt-1" />
//       </div>

//       <p className="text-xs sm:text-sm text-gray-200 mt-2 leading-relaxed">
//         Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae Elit Sit Tellus Massa Sit Morbi Pharetra. Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae Elit Sit Tellus Massa Sit Morbi Pharetra. Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae.
//       </p>

//       <div className="flex justify-end gap-4 mt-4 text-white text-xl">
//         <HiOutlineSpeakerWave className="hover:text-blue-300 cursor-pointer" />
//         <BiCopy className="hover:text-purple-300 cursor-pointer" />
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Card;



import React from 'react';
import { FiEdit2, FiMoreVertical } from 'react-icons/fi';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { BiCopy } from 'react-icons/bi';

const Card = () => {
  return (
    <div className="absolute top-[486px] left-[522px] w-[622px] h-[203px] rounded-[15px] flex shadow-md overflow-hidden">
      
      {/* Left Panel */}
      <div className="relative w-[204.45px] h-full bg-gradient-to-b from-[#3F51B5] to-[#673AB7] rounded-tl-[15px] rounded-bl-[15px] backdrop-blur-[14.9px]">
        
        {/* Edit Icon */}
        <div className="absolute top-[7px] left-[166px] w-[29px] h-[29px] border border-white/30 rounded-full flex items-center justify-center">
          <FiEdit2 className="text-white" size={14} />
        </div>

        {/* Text */}
        <p className="absolute top-[34px] left-[4.83px] w-[193.09px] h-[133px] text-white text-[13px] leading-[147%] font-semibold text-center font-[Public Sans]">
          I’m still Learning and can’t create everything yet, especially photorealistic images of people or things that go against my guidelines. Let me know if you’d like to try something else!
        </p>
      </div>

      {/* Right Panel */}
      <div className="relative w-[417.55px] h-full bg-[#324094] backdrop-blur-[2.9px] px-4 pt-3 pb-2 flex flex-col justify-between">
        
        {/* Title and Options */}
        <div className="flex justify-between items-start">
          <h3 className="text-[#C5BCFF] text-[18px] font-medium leading-[100%] capitalize w-[92px] h-[21px]">
            Title Name
          </h3>

          <div className="w-[29px] h-[29px] border border-[#1F296Acc] bg-[#1F296A] rounded-[5px] flex items-center justify-center transform rotate-90">
            <FiMoreVertical className="text-white opacity-30" size={20} />
          </div>
        </div>

        {/* Description */}
        <p className="text-white text-opacity-80 text-[12px] leading-[100%] font-normal mt-2 capitalize w-[383px] h-[56px]">
          Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae Elit Sit Tellus Massa Sit Morbi Pharetra. Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae.
        </p>

        {/* Icons */}
        <div className="flex gap-4 justify-end mt-auto pr-2">
          {/* Speaker Icon */}
          <div className="w-[20px] h-[20px] flex items-center justify-center">
            <HiOutlineSpeakerWave className="text-white" size={16} />
          </div>

          {/* Copy Icon */}
          <div className="w-[26px] h-[26px] flex items-center justify-center">
            <BiCopy className="text-white/40" size={19.5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

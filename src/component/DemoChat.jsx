import React from 'react';
import { Avatar } from '@/component/ui/Avatar';
import { FiEdit2, FiMoreVertical, FiSearch } from 'react-icons/fi';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { BiCopy } from 'react-icons/bi';
import image1 from '/image-1.jpg'
import image2 from '/image-2.png'

export function DemoChat() {
  return (
    <div className="relative w-full h-screen bg-[#1F296A] overflow-hidden scrollbar-none">

      <div className="top-8 right-8 absolute flex gap-2">
        <Avatar name="Abhinav Meshram" />
        <div className="flex items-center bg-[#324094] text-white text-sm w-[257px] h-[58px] rounded-t-[20px] rounded-br-[20px]  px-4">
          <span className="text-xs">Create atleast 4 images similar to this</span>
        </div>
      </div>

      <div className="top-20 right-32 w-70 h-60 absolute">
        <img
          src={image2}
          alt="Genie Character"
          className="object-contain w-full h-full"
        />
      </div>

      <div className="top-44 left-20 absolute flex items-center space-x-3">
        <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-[#C85ED8] to-[#A079F8]">
          <div className="w-full h-full rounded-full bg-[#1F296A] flex items-center justify-center">
            <FiSearch className="w-5 h-5 text-white" />
          </div>
        </div>

        <p className="text-lg font-normal text-white">
          Sure, here are a few images similar to the one you provided:
        </p>
      </div>

      <div className="absolute top-64 left-24 w-[622px] h-[180px] rounded-2xl flex shadow-md overflow-hidden">
        {/* Left Panel */}
        <div className="relative w-[204px] h-full bg-gradient-to-b from-[#3F51B5] to-[#673AB7] rounded-l-2xl backdrop-blur-sm">
          {/* Edit Icon */}
          <div className="absolute top-2 right-2 w-7 h-7 border border-white/30 bg-[#1F296A] rounded-full flex items-center justify-center">
            <FiEdit2 className="text-white" size={14} />
          </div>

          <p className="absolute top-9 left-1 w-[193px] h-[133px] text-white text-xs leading-tight font-semibold text-center px-2">
            I'm still Learning and can't create everything yet, especially photorealistic images of people or things that go against my guidelines. Let me know if you'd like to try something else!
          </p>
        </div>

        <div className="relative w-[418px] h-full bg-[#324094] backdrop-blur-sm px-4 pt-3 pb-2 flex flex-col justify-between">
          {/* Title and Options */}
          <div className="flex items-start justify-between">
            <h3 className="text-[#C5BCFF] text-lg font-medium">
              Title Name
            </h3>

            <div className="w-7 h-7 border bg-[#1F296A] border-white/30 rounded-full flex items-center justify-center">
              <FiMoreVertical className="text-white" size={20} />
            </div>
          </div>

          <p className="text-white/80 w-full mt-4 text-xs font-normal leading-tight">
            Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae Est Sit Tellus Rhoncus. Proin Tincidunt Id Ut Amet Consectetur. Risus Vitae Est Sit Tellus Risus Id Sit Tellus Risus Id Morbi Rhoncus. Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae.
          </p>

          <div className="flex justify-end gap-4 mt-auto">
            <div className="flex items-center justify-center w-5 h-5">
              <HiOutlineSpeakerWave className="text-white" size={16} />
            </div>

            <div className="flex items-center justify-center w-6 h-6">
              <BiCopy className="text-white/40" size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[460px] left-24 w-[622px] h-[180px] rounded-2xl flex overflow-hidden bg-[#324094] backdrop-blur-sm shadow-md">
        <div className="relative w-[207px] h-full rounded-l-2xl overflow-hidden bg-blue-400">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center w-full h-full">
            <img
              src={image1}
              alt="Genie on magic carpet"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute top-2 right-2 w-7 h-7 bg-[#1F296A] border border-white/30 rounded-full flex items-center justify-center">
            <FiEdit2 className="text-white" size={14} />
          </div>
        </div>

        <div className="relative w-[415px] h-full px-4 py-3 flex flex-col justify-start">
          <div className="absolute top-2 right-2 w-7 h-7 bg-[#1F296A] border border-white/30 rounded-full flex items-center justify-center">
            <FiMoreVertical className="text-white" size={18} />
          </div>

          <h3 className="text-[#C5BCFF] text-lg font-medium mt-2">
            Title Name
          </h3>

          <p className="text-white/80 w-full mt-4 text-xs font-normal leading-tight">
            Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae Est Sit Tellus Rhoncus. Proin Tincidunt Id Ut Amet Consectetur. Risus Vitae Est Sit Tellus Risus Id Sit Tellus Risus Id Morbi Rhoncus. Lorem Ipsum Dolor Sit Amet Consectetur. Risus Vitae.
          </p>

          <div className="bottom-2 right-3 absolute flex gap-3">
            <div className="flex items-center justify-center w-5 h-5">
              <HiOutlineSpeakerWave className="w-4 h-4 text-[#C85ED8]" />
            </div>

            <div className="flex items-center justify-center w-6 h-6">
              <BiCopy className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
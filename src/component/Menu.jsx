import React, { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoBrush, IoCamera, IoCube, IoFilm, IoGlobe, IoRefresh } from 'react-icons/io5';

export function Menu() {

  const [brandDescription, setBrandDescription] = useState('');

  const handleDescriptionChange = (e) => {
    if (e.target.value.length <= 50) {
      setBrandDescription(e.target.value);
    }
  };

  return (
    <div
      className="
        w-[16.563rem] 
        h-[60.563rem]  
        [background:linear-gradient(209.2deg,_#3F51B5_42.5%,_#673AB7_92.49%)]
        [box-shadow:0_0_14.9px_0_#0000001F]
        rounded-[0.625rem]
        text-white
      "
    >
      {/* Ad Type Tabs */}
      <div className="border-white/20 flex gap-3 p-4 border-b">
        <button className="text-xs leading-[100%] py-1 px-2 text-white/80">Ad Copy</button>
        <button className="font-semibold text-xs py-1 px-2 text-[12px] leading-[100%] tracking-[0%]">Ad Creative</button>
        <button className="text-xs leading-[100%] py-1 px-2 text-white/80">Ad Video</button>
      </div>

      {/* Ad Creative Menu */}
      <div className='flex flex-col gap-3'>

        <div className='border-white/20 flex flex-col gap-3 p-3 border-b'>

          <div className="flex flex-col gap-2">
            <label htmlFor="platform" className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Select Platform</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </label>
            <select
              id="platform"
              className="bg-[#3445A1] rounded-md p-2 w-full text-xs font-normal outline-none placeholder:text-white/60 opacity-40 border-white/20 border-[0.5px]"
              defaultValue=""
              aria-required="true"
            >
              <option value="" disabled>Select ad platform</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="linkedin">LinkedIn</option>
              <option value="youtube">YouTube</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="brandName" className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Brand Name</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </label>
            <input
              id="brandName"
              type="text"
              placeholder="Enter brand name"
              className="bg-[#3445A1] rounded-md p-2 w-full text-xs font-normal outline-none placeholder:text-white/60 opacity-60 border-white/20 border-[0.5px]"
              aria-required="true"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="brandDescription" className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Brand Description</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </label>
            <div className="relative">
              <textarea
                id="brandDescription"
                placeholder="Enter description"
                className="bg-[#3445A1] rounded-md p-2 w-full text-xs font-normal outline-none placeholder:text-white/60 opacity-60 border-white/20 border-[0.5px] h-16 resize-none"
                maxLength={50}
                value={brandDescription}
                onChange={handleDescriptionChange}
                aria-describedby="charCount"
              />
              <div id="charCount" className="bottom-2 right-2 text-white/60 absolute text-[6px]">{brandDescription.length}/50 characters</div>
            </div>
          </div>

        </div>

        <div className='border-white/20 flex flex-col gap-3 p-3 border-b'>

          {/* Aspect Ratio */}
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-1">
              <label class="font-normal text-xs leading-[100%]">Aspect Ratio</label>
              <i class="opacity-40 w-3 h-3 text-white"></i>
            </div>
            <div class="flex gap-2">
              <button class="w-[68.94px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <div class="w-5 h-5 bg-[#474CB5] rounded-[2px] border-[0.5px] border-white opacity-60"></div>
                <span class="font-normal text-xs leading-[100%] text-white">1:1</span>
              </button>
              <button class="w-[68.94px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <div class="w-3 h-5 bg-[#474CB5] rounded-[2px] border-[0.5px] border-white opacity-60"></div>
                <span class="font-normal text-xs leading-[100%] text-white">2:3</span>
              </button>
              <button class="w-[68.94px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <div class="w-5 h-3 bg-[#474CB5] rounded-[2px] border-[0.5px] border-white opacity-60"></div>
                <span class="font-normal text-xs leading-[100%] text-white">16:9</span>
              </button>
              <button class="w-[21px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center">
                <IoIosArrowDown class="w-3 h-3 text-white"></IoIosArrowDown>
              </button>
            </div>
          </div>

          {/* Image Style */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Image Style</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-2">
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoRefresh className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">Auto</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoGlobe className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">General</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoCamera className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">Realistic</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoBrush className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">Design</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoCube className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">3D</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <IoFilm className="opacity-40 w-3 h-3 text-white" />
                <span className="font-normal text-xs leading-[100%] text-white">Anime</span>
              </button>
            </div>
          </div>

          {/* Generation Pace */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Generation Pace</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <span className="font-normal text-xs leading-[100%] tracking-[0%]">Fast</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <span className="font-normal text-xs leading-[100%] tracking-[0%]">Medium</span>
              </button>
              <button className="w-[77px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1">
                <span className="font-normal text-xs leading-[100%] tracking-[0%]">Slow</span>
              </button>
            </div>
          </div>

          {/* Number of Ad Creatives */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Number of Ad Creatives</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </div>
            <div className="flex gap-2">
              <button className="w-[31px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1"><span className="font-normal text-xs leading-[100%] tracking-[0%]">1</span></button>
              <button className="w-[31px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1"><span className="font-normal text-xs leading-[100%] tracking-[0%]">2</span></button>
              <button className="w-[31px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1"><span className="font-normal text-xs leading-[100%] tracking-[0%]">3</span></button>
              <button className="w-[31px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1"><span className="font-normal text-xs leading-[100%] tracking-[0%]">4</span></button>
              <button className="w-[31px] h-[30px] bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 flex items-center justify-center gap-1"><span className="font-normal text-xs leading-[100%] tracking-[0%]">5</span></button>
            </div>
          </div>

          {/* Color Palette */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <span className="font-normal text-xs leading-[100%]">Color Palette</span>
              <FaRegQuestionCircle className="opacity-40 w-3 h-3 text-white" />
            </div>
            <div className="flex items-center justify-between bg-[#3445A1] rounded-[5px] border-[0.5px] border-white/20 p-2">
              <span className="font-normal text-xs leading-[100%]">Auto</span>
              <div className="flex gap-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              </div>
              <IoIosArrowDown className="w-3 h-3 text-white" />
            </div>
          </div>

        </div>





        {/* Annual Plan */}
        <div className="mt-auto">
          <div className="bg-[#5C6BC0] rounded-md p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-xs leading-[100%]">Annual Platinum Plan</span>
              <button className="bg-white text-[#673AB7] rounded-md py-1 px-3 font-normal text-xs">Upgrade</button>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <span className="bg-[#673AB7] rounded-full w-5 h-5 flex items-center justify-center text-xs">🔄</span>
                <span className="text-xs">20/500</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="bg-[#673AB7] rounded-full w-5 h-5 flex items-center justify-center text-xs">🎨</span>
                <span className="text-xs">15/300</span>
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

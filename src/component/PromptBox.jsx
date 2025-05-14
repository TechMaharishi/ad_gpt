import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

export function PromptBox() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="relative w-full max-w-3xl">
      <div className="bg-gradient-to-r from-[#3F51B5] via-[#4E5CBB] to-[#673AB7] shadow-[0_0_0.93125rem_0_rgba(0,0,0,0.12)] relative flex flex-col w-full p-4 rounded-lg">
        <label className="pl-1 mb-1 text-sm font-medium text-white">Prompt</label>
        <textarea
          className="text-white/80 placeholder-white/60 w-full h-12 text-sm bg-transparent border-none outline-none resize-none"
          placeholder="Describe your ad copy. Get creative..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-end mt-1">
          <button className="bg-white/20 flex items-center px-3 py-1 text-xs font-medium text-white rounded">
            <IoSearch className="w-3 h-3 mr-1" />
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
import { RainbowHighlight } from './RainbowHighlight';
import userData from '@constants/data';

export default function Hero() {
  // const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-3/5 mx-auto text-right md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <h1 className="text-right text-4xl md:text-7xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Seeking to create a more just world through software
          </h1>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 md:-mr-40 mt-20">
        <div className="w-3/4 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
        </div>
      </div>
    </div>
  );
}

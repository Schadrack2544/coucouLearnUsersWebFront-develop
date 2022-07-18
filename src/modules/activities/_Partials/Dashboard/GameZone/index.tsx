import React from 'react';
import avatar from 'assets/images/photo/avatar.png';
import PlayIcon from 'modules/_partials/_drawable/icons/playIcon';

const GameZone = () => {
  return (
    <div className="p-4 grid gap-x-10 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
      {new Array(5).fill(0).map(element => (
        <div className="flex flex-col w-full h-[300px] bg-gray-400 rounded-[30px]">
          <div
            className="flex-grow bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${avatar})` }}
          />
          <div className="flex items-center space-x-4 bg-brand-blue rounded-[30px] text-white p-4">
            <p className="flex flex-col">
              <span>Name: Number 1</span>
              <span className="mt-1">Unit: Numbers 0-10</span>
            </p>
            <button type="button">
              <PlayIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameZone;

import React from 'react';
import GameIcon from 'modules/_partials/_drawable/icons/gameIcon';
import tutorsIcon from 'assets/images/svg/tutors.svg';

const TrustedBy = () => {
  return (
    <div className="w-full flex flex-col items-center md:max-w-6xl rounded-[30px] bg-[#10B981] p-4">
      <h1 className="text-xl md:text-2xl text-white">
        Trusted by 10,000+ learners across Africa
      </h1>
      <div className="flex md:justify-center overflow-x-auto w-full gap-x-6">
        <div className="flex flex-col items-center gap-y-3">
          <GameIcon />
          <div className="flex flex-col items-center text-base">
            <p>augmented,</p>
            <p>personalized</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <GameIcon />
          <div className="flex flex-col items-center text-base">
            <p>Best of the</p>
            <p>best tutors</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <GameIcon />
          <div className="flex flex-col items-center text-base">
            <p>Best of the</p>
            <p>best tutors</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <GameIcon />
          <div className="flex flex-col items-center text-base">
            <p>Best of the</p>
            <p>best tutors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;

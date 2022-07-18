import React from 'react';

const CurriculaCard = ({ title, avatar }) => {
  return (
    <div className="bg-white w-full max-w-[250px] cursor-pointer border border-blue-600 rounded px-8 py-4 flex flex-col justify-center">
      <img
        src={avatar}
        alt=""
        className="w-16 h-16 object-cover mx-auto rounded-full"
      />
      <p className="text-base mt-2 font-semibold text-blue-800 text-center">
        {title}
      </p>
    </div>
  );
};

export default CurriculaCard;

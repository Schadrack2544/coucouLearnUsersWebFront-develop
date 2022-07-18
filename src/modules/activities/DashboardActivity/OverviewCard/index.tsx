import React from 'react';

const OverviewCard = ({ title, total }) => {
  return (
    <div className="bg-white cursor-pointer border border-gray-scale rounded px-16 py-4 flex flex-col items-center justify-center">
      <p className="text-base font-semibold text-gray-scale">
        {title}
      </p>
      <p className="text-xl font-bold tracking-wide mt-3">{total}</p>
    </div>
  );
};

export default OverviewCard;

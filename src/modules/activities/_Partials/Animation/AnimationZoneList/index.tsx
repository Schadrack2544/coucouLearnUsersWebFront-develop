import React from 'react';
import MiniItem from '../MiniItem';

const AnimationZoneList = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 gap-y-5 md:gap-y-5 md:gap-x-10 w-full md:max-w-4xl py-12 px-4">
      {data.map(animation => (
        <MiniItem key={animation.id} data={animation} />
      ))}
    </div>
  );
};
export default AnimationZoneList;

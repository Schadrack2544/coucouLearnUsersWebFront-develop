import React from 'react';
import UserWidget from 'modules/widgets/UserWidget';
import WaveIcon from 'modules/_partials/_drawable/icons/waveIcon';
import { filters } from 'helpers/filters';
import ActionButton from 'modules/_partials/ActionButton';
import { useAnimation } from 'modules/contexts/AnimationContext';
import Topper from '../_Partials/Dashboard/Topper';
import AnimationZoneList from '../_Partials/Animation/AnimationZoneList';

export const data = [
  {
    id: 1,
    title: 'Keza and Manzi in river',
    unit: 'Unit: Numbers from 0-10',
    createdAt: 'May 21, 2022',
    duration: '12:12',
    likes: 120,
    comments: 120,
    verified: true,
    creator: 'Augmented Future',
  },
  {
    id: 2,
    title: 'Keza and Manzi in river',
    unit: 'Unit: Numbers from 0-10',
    createdAt: 'May 21, 2022',
    duration: '12:12',
    likes: 120,
    comments: 120,
    verified: true,
    creator: 'Augmented Future',
  },
  {
    id: 3,
    title: 'Keza and Manzi in river',
    unit: 'Unit: Numbers from 0-10',
    createdAt: 'May 21, 2022',
    duration: '12:12',
    likes: 120,
    comments: 120,
    verified: true,
    creator: 'Augmented Future',
  },
  {
    id: 4,
    title: 'Keza and Manzi in river',
    unit: 'Unit: Numbers from 0-10',
    createdAt: 'May 21, 2022',
    duration: '12:12',
    likes: 120,
    comments: 120,
    verified: true,
    creator: 'Augmented Future',
  },
];

const AnimationZoneActivity = () => {
  const { contents, loading, onFetchContents } = useAnimation();
  React.useEffect(() => {
    if (!contents.length) {
      onFetchContents();
    }
  }, []);
  // eslint-disable-next-line no-console
  console.log(contents);
  return (
    <UserWidget>
      <Topper title="Animations" />
      <div className="px-4 my-4 flex space-x-3">
        <WaveIcon />
        <p className="md:max-w-xl text-base">
          coucou, Here you get access to fun games that were developed
          to support what you learnt in class!
        </p>
      </div>
      <div className="px-4 whitespace-nowrap flex space-x-6 overflow-x-auto md:justify-center w-full">
        {filters.map(element => (
          <ActionButton key={element.label} item={element} />
        ))}
      </div>
      <AnimationZoneList data={contents} />
    </UserWidget>
  );
};

export default AnimationZoneActivity;

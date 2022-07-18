import React from 'react';
import UserWidget from 'modules/widgets/UserWidget';
import WaveIcon from 'modules/_partials/_drawable/icons/waveIcon';
import Topper from '../_Partials/Dashboard/Topper';
import ActionButtons from '../_Partials/Dashboard/ActionButtons';
import GameZone from '../_Partials/Dashboard/GameZone';

const GameZoneActivity = () => {
  return (
    <UserWidget>
      <Topper title="Games Zone" />
      <div className="px-4 my-4 flex space-x-3">
        <WaveIcon />
        <p className="md:max-w-xl text-base">
          coucou, Here you get access to fun games that were developed
          to support what you learnt in class!
        </p>
      </div>
      <ActionButtons />
      <GameZone />
    </UserWidget>
  );
};

export default GameZoneActivity;

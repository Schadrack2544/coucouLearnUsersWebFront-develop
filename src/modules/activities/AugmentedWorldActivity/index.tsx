import React from 'react';
import UserWidget from 'modules/widgets/UserWidget';
import WaveIcon from 'modules/_partials/_drawable/icons/waveIcon';
import { filters } from 'helpers/filters';
import Topper from '../_Partials/Dashboard/Topper';
import ActionButton from '../_Partials/Dashboard/ActionButtons';
import AugmentedWorld from '../_Partials/Dashboard/AugmentedWorld';

const AugmentedWorldActivity = () => {
  return (
    <UserWidget>
      <Topper title="Augmented world" />
      <div className="px-4 my-4 flex space-x-3">
        <WaveIcon />
        <p className="md:max-w-xl text-base">
          coucou, Here you interacct with different real-life objects
          using a technology called augmented reality (AR)
        </p>
      </div>
      <div className="px-4 whitespace-nowrap flex space-x-6  flex-col sm:flex-row md:justify-center w-full">
        {filters.map(element => (
          <ActionButton key={element.label} item={element} />
        ))}
      </div>
      <AugmentedWorld />
    </UserWidget>
  );
};

export default AugmentedWorldActivity;

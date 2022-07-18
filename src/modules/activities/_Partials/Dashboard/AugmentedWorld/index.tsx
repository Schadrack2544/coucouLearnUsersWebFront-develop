import React, { useState } from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { IconButton } from '@mui/material';
import NewtabIcon from 'modules/_partials/_drawable/icons/newtabIcon';
import PopUpVideo from 'modules/_partials/popupVideo';

const AugmentedWorld = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="p-4 grid gap-x-10 gap-y-6 md:grid-cols-2 xl:grid-cols-3">
      {new Array(6).fill(0).map(element => (
        <div className="flex flex-col w-full h-[300px] bg-gray-400 rounded-[30px]">
          <div className="flex-grow" />

          <div className="flex items-center space-x-4 bg-brand-blue rounded-[30px] text-white p-4">
            <p className="flex flex-col">
              <span>Name: Number 1</span>
              <span className="mt-1">Unit: Numbers 0-10</span>
            </p>
            {/* <button type="button" onClick={() => setIsOpen(true)}>
              <NewtabIcon />
            </button> */}
            <IconButton onClick={() => setIsOpen(true)}>
              <PlayCircleIcon
                sx={{ fontSize: '50px', color: 'white' }}
              />
            </IconButton>
          </div>
        </div>
      ))}
      <PopUpVideo openVideo={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default AugmentedWorld;

import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar } from '@mui/material';
import jules from 'assets/images/jules.png';
import { useNavbar } from 'modules/contexts/NavbarContext';

const Topper = ({ title }) => {
  const { clientHeaderRef } = useNavbar();
  return (
    <div
      ref={clientHeaderRef}
      className="w-full whitespace-nowrap px-4 py-2 flex items-center justify-between space-2 md:space-x-10"
    >
      <h1 className="hidden md:block text-xl font-medium md:text-3xl">
        {title}
      </h1>
      <div className="flex items-center space-x-3 md:space-x-6">
        <button
          type="button"
          className="flex space-x-2 items-center bg-brand-yellow rounded-full py-2 px-3"
        >
          <span>Primary 4</span>
          <ArrowDropDownIcon />
        </button>
        <button
          type="button"
          className="relative flex flex-col items-center rounded-full p-2"
        >
          <span className="w-6 h-6 rounded-full bg-red-500 text-white p-1 top-0 right-0 absolute">
            4
          </span>
          <NotificationsNoneIcon fontSize="large" />
        </button>
        <Avatar
          src={jules}
          alt="Jules"
          style={{ width: '64px', height: '64px' }}
        />
      </div>
    </div>
  );
};

export default Topper;

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'modules/_partials/Logo';
import brandMinLogo from 'assets/images/brandMinLogo.svg';
import Topper from 'modules/activities/_Partials/Dashboard/Topper';

const UserWidget = ({ children, title }) => {
  return (
    <div className="w-full flex flex-col flex-grow bg-white">
      <div className="flex space-x-12 items-center justify-between">
        <div className="hidden md:flex p-2 pl-4">
          <Logo isBrand />
        </div>
        <Link to="/" className="md:hidden flex items-start p-2 pl-4">
          <img
            src={brandMinLogo}
            alt=""
            className="flex right-auto"
          />
        </Link>
        <Topper title={title} />
      </div>
      <div className="flex flex-col flex-grow w-full items-center">
        {children}
      </div>
    </div>
  );
};

export default UserWidget;

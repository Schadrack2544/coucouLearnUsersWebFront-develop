import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import * as navs from 'helpers/navs';
import MinLogo from 'modules/_partials/_drawable/minLogo';
import NavButton from 'modules/_partials/NavButton';
import SideNav from 'modules/activities/_Partials/SideNav';
import Header from 'modules/_partials/Header';

const AdminScaffold = ({ children }) => {
  return (
    <div className="flex flex-grow w-full">
      <SideNav />

      <div className="flex flex-col bg-accent-light max-w-[83.333333%] w-full overflow-x-hidden">
        <Header />
        <div className="flex flex-col items-center flex-grow w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminScaffold;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import avatar from 'assets/images/avatar.png';
import { sideNavs } from 'helpers/navs';
import SearchIcon from '../_drawable/icons/searchIcon';
import NotificationIcon from '../_drawable/icons/notificationIcon';

const Header = ({ profile }) => {
  const { pathname } = useLocation();
  const getLabel = () => {
    switch (pathname) {
      case sideNavs[0].to:
        return sideNavs[0].label;
      case sideNavs[1].to:
        return sideNavs[1].label;
      case '/add-curriculum':
        return 'Add curriculum';
      default:
        return '';
    }
  };
  return (
    <div className="top-0 sticky bg-accent-light drop-shadow font-medium flex items-center justify-between px-4 py-[3.5px] w-full">
      <h2>{getLabel()}</h2>
      <div className="flex items-center gap-x-6">
        <button type="button">
          <SearchIcon />
        </button>
        <button type="button">
          <NotificationIcon />
        </button>
        <div className="h-full w-0 5 bg-gray-scale" />
        <div className="flex items-center gap-x-2 cursor-pointer">
          <p className="font-medium">Jones Ferdinand</p>
          <img
            src={avatar}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.me.data,
});

export default connect(mapStateToProps)(Header);

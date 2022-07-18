import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sideNavs } from 'helpers/navs';
import { useNavbar } from 'modules/contexts/NavbarContext';
import logo from 'assets/images/logo.svg';
import minLogo from 'assets/images/minLogo.svg';
import { useWindow } from 'modules/contexts/WindowContext';

const SideNav = () => {
  const { currentTab, setCurrentTab } = useNavbar();
  const { pathname } = useLocation();
  // eslint-disable-next-line no-console
  console.log(pathname);
  const { isLargeDevice } = useWindow();
  return (
    <div className="flex scrollbar flex-col min-h-screen max-h-screen top-0 sticky overflow-y-auto max-w-[16.666667%] bg-brand-black text-brand-gray w-full overflow-hidden">
      <Link
        to="/"
        className="px-4 py-3"
        onClick={() => setCurrentTab(-1)}
      >
        {isLargeDevice ? (
          <img src={logo} alt="" className="h-[48px]" />
        ) : (
          <img src={minLogo} alt="" className="h-[48px]" />
        )}
      </Link>
      {sideNavs.map((element, index) => {
        const active = currentTab === index;
        return (
          <Link
            key={element.label}
            to={element.to}
            onClick={() => setCurrentTab(index)}
            className={`flex items-center relative gap-x-2 px-4 py-3 ${
              active
                ? 'bg-gray-scale text-accent-light'
                : 'hover:bg-gray-scale hover:text-white'
            }`}
          >
            {active ? (
              <span className="top-0 bottom-0 left-0 w-1 bg-accent-light absolute" />
            ) : null}
            <element.icon color={active ? '#DDE2FF' : '#9FA2B4'} />
            <span className="hidden md:block">{element.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNav;

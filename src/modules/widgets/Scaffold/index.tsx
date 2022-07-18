import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import * as navs from 'helpers/navs';
import MinLogo from 'modules/_partials/_drawable/minLogo';
import NavButton from 'modules/_partials/NavButton';

const Scaffold = ({
  children,
  leftTopNavs,
  leftBottomNavs,
  topNavs,
}) => {
  const navigate = useNavigate();
  const handleClick = (path: string, index: number) => {
    navigate(path);
  };
  return (
    <div className="flex bg-white h-screen w-full overflow-y-auto text-sm">
      <div className="flex flex-col w-1/6 border-r border-[#DBDBDB]">
        <Link to="/dashboard" className="col-span-1 px-4 py-3 w-full">
          <MinLogo />
        </Link>
        <div className="flex flex-col flex-grow col-span-5 bg-white p-2 w-full border-t border-[#DBDBDB]">
          <nav className="flex flex-col flex-grow font-medium">
            {leftTopNavs.map((nav, index) => (
              <NavButton
                key={`${nav.label}_${nav.path}`}
                label={nav.label}
                icon={nav.icon && <nav.icon color="#09B151" />}
                onClick={() => handleClick(nav.path, index)}
                className="w-full flex items-center space-x-[12px] py-2 px-3 rounded"
              />
            ))}
          </nav>

          <div className="flex flex-col mt-4">
            {leftBottomNavs.map((nav, index) => (
              <NavButton
                key={`${nav.label}_${nav.path}`}
                onClick={() => handleClick(nav.path, index)}
                className={`flex items-center space-x-2 px-3 py-2 ${nav.className}`}
                icon={nav.icon && <nav.icon />}
                label={nav.label}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-5/6 overflow-y-auto">
        <div className="font-medium flex items-center justify-end col-span-1 bg-white px-4 py-[3.5px] w-full">
          {topNavs.map((nav,index) => (
            <NavButton
              key={`${nav.label}_${nav.path}`}
              onClick={() => handleClick(nav.path, index)}
              className={`flex items-center space-x-2 px-3 py-[14.5px] ${nav.className}`}
              icon={nav.icon && <nav.icon />}
              label={nav.label}
            />
          ))}
        </div>
        <div className="flex flex-col items-center flex-grow col-span-5 bg-white w-full overflow-y-auto overflow-x-hidden border-t border-[#DBDBDB]">
          {children}
        </div>
      </div>
    </div>
  );
};

Scaffold.propTypes = {
  children: PropTypes.node,
  leftTopNavs: PropTypes.array,
  leftBottomNavs: PropTypes.array,
  topNavs: PropTypes.array,
};

Scaffold.defaultProps = {
  children: <div />,
  leftTopNavs: navs.leftTopNavs,
  leftBottomNavs: navs.leftBottomNavs,
  topNavs: navs.topNavs,
};

export default Scaffold;

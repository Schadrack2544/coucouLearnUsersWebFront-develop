import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from 'modules/_partials/Logo';
import brandMinLogo from 'assets/images/brandMinLogo.svg';
import homeIcon from 'assets/images/icons/homeIcon.png';
import boardIcon from 'assets/images/icons/boardIcon.svg';
import subscribe from 'assets/images/icons/subscribe.svg';
import logout from 'assets/images/icons/logout.svg';
import comicIcon from 'assets/images/icons/comicIcon.png';
import gameIcon from 'assets/images/svg/games.svg';
import audioIcon from 'assets/images/icons/audioIcon.png';
import augmentedWorld from 'assets/images/svg/augmentedWorld.svg';
import tvIcon from 'assets/images/icons/tvIcon.svg';
import careerGuidance from 'assets/images/svg/careerGuidance.svg';
import pastPapers from 'assets/images/svg/pastPapers.svg';
import sakweSakwe from 'assets/images/svg/sakweSakwe.svg';
import safeguardingTips from 'assets/images/svg/safeguardingTips.svg';

export const navItems = [
  {
    iconUrl: homeIcon,
    label: 'Home',
    path: '/contents/home',
  },
  {
    iconUrl: tvIcon,
    label: 'Animation zone',
    path: '/contents/animations',
  },
  {
    iconUrl: comicIcon,
    label: 'Library',
    path: '/contents/library',
  },
  {
    iconUrl: audioIcon,
    label: 'Audio books zone',
    path: '/contents/audio-books',
  },
  {
    iconUrl: boardIcon,
    label: 'Board Game',
    path: '/contents/board-game',
  },

  {
    iconUrl: gameIcon,
    label: 'Game zone',
    path: '/contents/games',
  },
  {
    iconUrl: augmentedWorld,
    label: 'Augmented world',
    path: '/contents/augmented-world',
  },
  {
    iconUrl: careerGuidance,
    label: 'Career Guidance',
    path: '/contents/career-guidance',
  },
  {
    iconUrl: pastPapers,
    label: 'Past Papers',
    path: '/contents/[past-papers',
  },
  {
    iconUrl: sakweSakwe,
    label: 'Sakwe Sakwe',
    path: '/contents/sakwe-sakwe',
  },
  {
    iconUrl: safeguardingTips,
    label: 'Safeguarding Tips',
    path: '/contents/safeguarding-tips',
  },
];

const UserWidget = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div className="w-full flex bg-white min-h-screen overflow-y-auto">
      <div className="top-0 sticky flex flex-col max-w-[20%] min-h-screen scrollbar overflow-y-auto">
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
        <div className="flex flex-col mt-4 rounded-2xl bg-[#D97706] text-white flex-grow">
          {navItems.map(element => {
            const active = pathname.includes(element.path);
            return (
              <Link
                key={element.label}
                to={element.path}
                className={`p-2 pl-4 flex md:flex-col lg:flex-row items-center gap-x-3 ${
                  active
                    ? 'bg-white bg-opacity-30'
                    : 'hover:bg-white hover:bg-opacity-30'
                }`}
              >
                <img
                  src={element.iconUrl}
                  alt=""
                  className="w-6 h-6"
                />
                <span className="hidden md:block">
                  {element.label}
                </span>
              </Link>
            );
          })}
          <div className="flex flex-col mt-auto">
            <Link
              to="/home/pricing"
              className="mt-12 p-2 pl-4 flex md:flex-col lg:flex-row items-center gap-x-3 hover:bg-white hover:bg-opacity-30"
            >
              <img src={subscribe} alt="" className="w-6 h-6" />
              <span className="hidden md:block">Subscribe</span>
            </Link>
            <Link
              to="/logout"
              className="p-2 pl-4 flex md:flex-col lg:flex-row items-center gap-x-3 hover:bg-white hover:bg-opacity-30"
            >
              <img src={logout} alt="" className="w-6 h-6" />
              <span className="hidden md:block">Logout</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow w-full max-w-[80%] mx-auto items-center">
        {children}
      </div>
    </div>
  );
};

export default UserWidget;

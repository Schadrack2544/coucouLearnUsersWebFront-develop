import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import app from 'assets/images/app.png';
import augmentedReality from 'assets/images/svg/augmentedReality.svg';
import animationZone from 'assets/images/svg/animationZone.svg';
import bgButton from 'assets/images/bgButton.svg';
import ClientHeader from 'modules/_partials/ClientHeader';

interface IInfoWidget {
  imageApp?: string;
  seeMore?: string;
  description?: string;
  next?: string;
  back?: string;
  mainButtons?: any[];
  onBack?: () => void;
  onNext?: () => void;
}
const InfoWidget = ({
  imageApp,
  seeMore,
  description,
  next,
  back,
  onNext,
  onBack,
  mainButtons,
}: IInfoWidget) => {
  return (
    <div className="flex flex-col min-h-screen overflow-y-auto bg-white w-full">
      <ClientHeader />
      <div className="relative md:flex w-full flex-grow text-white md:text-gray-800">
        <div className="flex flex-col md:w-1/2 p-4 md:p-8 bg-brand-blue md:bg-white h-full">
          {/* <div className="hidden md:flex">
            <Logo isBrand />
          </div> */}

          <div className="flex flex-col flex-grow md:flex-grow-0 items-center md:items-start my-auto">
            <div className="flex md:hidden mb-3 flex-grow flex-col items-center space-y-2">
              <div
                className="bg-center bg-contain w-[150px] flex-grow bg-no-repeat"
                style={{ backgroundImage: `url(${imageApp})` }}
              />
              <div className="w-6 h-6 rounded-full bg-brand-yellow" />
            </div>
            <p className="font-thin text-4xl md:text-6xl">
              {seeMore}
            </p>
            <p className="w-full max-w-sm text-base font-medium leading-relaxed mt-8">
              {description}
            </p>
            <div className="flex text-gray-800 z-20 flex-wrap items-center gap-x-3 gap-y-3 md:gap-x-12 py-4">
              {mainButtons.map(element => element)}
            </div>
            <div className="w-full mt-12 flex md:hidden items-center">
              {back ? (
                <button
                  type="button"
                  onClick={onBack}
                  className="flex items-center py-3 rounded-lg bg-center bg-cover bg-no-repeat uppercase font-medium text-gray-300"
                >
                  <ArrowBackIcon />
                  <span>{back}</span>
                </button>
              ) : null}
              <button
                type="button"
                onClick={onNext}
                className="ml-auto px-12 py-3 rounded-lg bg-center bg-cover bg-no-repeat uppercase font-medium text-brand-blue"
                style={{ backgroundImage: `url(${bgButton})` }}
              >
                {next}
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex space-y-2 flex-col items-center justify-center py-4 left-0 h-full right-0 absolute">
          <div
            className="bg-center bg-contain flex-grow w-[300px] bg-no-repeat"
            style={{ backgroundImage: `url(${imageApp})` }}
          />
          <div className="w-8 h-8 rounded-full bg-brand-yellow" />
        </div>
        <div className="hidden md:flex items-end flex-col md:w-1/2 p-4 md:p-8 bg-brand-blue">
          <div className="z-20 mt-auto space-x-24 flex items-center">
            {back ? (
              <button
                type="button"
                onClick={onBack}
                className="flex items-center px-12 py-3 rounded-lg bg-center bg-cover bg-no-repeat uppercase font-medium text-gray-300"
              >
                <ArrowBackIcon />
                <span>{back}</span>
              </button>
            ) : null}
            <button
              type="button"
              onClick={onNext}
              className="px-12 py-3 rounded-lg bg-center bg-cover bg-no-repeat uppercase font-medium text-brand-blue"
              style={{ backgroundImage: `url(${bgButton})` }}
            >
              {next}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoWidget.defaultProps = {
  imageApp: app,
  seeMore: 'SEE MORE',
  next: 'Next',
  back: '',
  onBack() {},
  onNext() {},
  description:
    'Watch educating animations,read and listen to books and augment them all linked to your respective curriculum',
  mainButtons: [
    <button
      type="button"
      className="bg-brand-yellow max-w-[170px] flex items-center space-x-3 font-medium px-6 py-3 rounded-[30px]"
    >
      <img
        src={augmentedReality}
        alt=""
        className="w-[40px] h-[40px]"
      />
      <span>Augmented world</span>
    </button>,
    <button
      type="button"
      className="bg-brand-yellow max-w-[170px] flex items-center space-x-3 font-medium px-6 py-3 rounded-[30px]"
    >
      <img src={animationZone} alt="" className="w-[40px] h-[40px]" />
      <span>Animations zone</span>
    </button>,
  ],
};

export default InfoWidget;

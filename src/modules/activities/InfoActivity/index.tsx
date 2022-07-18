import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfoWidget from 'modules/widgets/InfoWidget';
import app from 'assets/images/app.png';
import boardGame from 'assets/images/boardGame.png';
import app1 from 'assets/images/app1.png';
import augmentedReality from 'assets/images/svg/augmentedReality.svg';
import animationZone from 'assets/images/svg/animationZone.svg';
import gameIcon from 'assets/images/icons/gameIcon.svg';
import boardIcon from 'assets/images/icons/boardIcon.svg';
import personIcon from 'assets/images/icons/personIcon.svg';
import tvIcon from 'assets/images/icons/tvIcon.svg';

const infoData = [
  {
    imageApp: app,
    seeMore: 'SEE MORE',
    next: 'Next',
    back: '',
    description:
      'Watch educating animations,read and listen to books and augment them all linked to your respective curriculum',
    mainButtons: [
      <a href="/contents/augmented-world">
        {' '}
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
        </button>
      </a>,
      <a href="/contents/animations">
        <button
          type="button"
          className="bg-brand-yellow max-w-[170px] flex items-center space-x-3 font-medium px-6 py-3 rounded-[30px]"
        >
          <img
            src={animationZone}
            alt=""
            className="w-[40px] h-[40px]"
          />
          <span>Animations zone</span>
        </button>
      </a>,
    ],
  },
  {
    imageApp: boardGame,
    seeMore: 'DO MORE',
    next: 'Next',
    back: 'Back',
    description:
      'Practice via mobile and desktop games as well as our board game that stimulates parent-child engagement. You learn more through play!',
    mainButtons: [
      <a href="/contents/games">
        <button
          type="button"
          className="bg-brand-yellow max-w-[170px] flex items-center space-x-3 font-medium px-6 py-3 rounded-[30px]"
        >
          <img src={gameIcon} alt="" className="w-[40px] h-[40px]" />
          <span>Games zone</span>
        </button>{' '}
      </a>,
      <a href="/contents/board-game">
        <button
          type="button"
          className="bg-brand-yellow max-w-[170px] flex items-center space-x-3 font-medium px-6 py-3 rounded-[30px]"
        >
          <img src={tvIcon} alt="" className="w-[40px] h-[40px]" />
          <span>Board game</span>
        </button>
      </a>,
    ],
  },
  {
    imageApp: app1,
    seeMore: 'BE MORE',
    next: 'Start',
    back: 'Back',
    description:
      'Get personalized learning by knowing where you need support, book outstating tutors in all subjects and get career guidance tips',
    mainButtons: [
      <a href="/contents/tutors">
        <button
          type="button"
          className="bg-brand-yellow max-w-[170px] flex items-center space-x-3 font-medium px-6 py-3 rounded-[30px]"
        >
          <img
            src={personIcon}
            alt=""
            className="w-[40px] h-[40px]"
          />
          <span>Get Tutors</span>
        </button>{' '}
      </a>,
      <a href="/contents/career-guidance">
        <button
          type="button"
          className="bg-brand-yellow max-w-[170px] flex items-center space-x-3 font-medium px-6 py-3 rounded-[30px]"
        >
          <img src={tvIcon} alt="" className="w-[40px] h-[40px]" />
          <span>Career guidance</span>
        </button>
      </a>,
    ],
  },
];

const InfoActivity = () => {
  const [index, setIndex] = React.useState(0);
  const wrapperRef = React.useRef(null);
  const navigate = useNavigate();
  const handleNext = () => {
    if (index < infoData.length - 1) {
      setIndex(index + 1);
    } else {
      navigate('/home', { replace: true });
    }
    wrapperRef.current?.classList?.add('slideLeft');
    setTimeout(() => {
      wrapperRef.current?.classList?.remove('slideLeft');
    }, 500);
  };
  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
    <div ref={wrapperRef} className="w-full flex-grow flex flex-col">
      <InfoWidget
        imageApp={infoData[index].imageApp}
        seeMore={infoData[index].seeMore}
        next={infoData[index].next}
        back={infoData[index].back}
        description={infoData[index].description}
        onNext={handleNext}
        onBack={handleBack}
        mainButtons={infoData[index].mainButtons}
      />
    </div>
  );
};

export default InfoActivity;

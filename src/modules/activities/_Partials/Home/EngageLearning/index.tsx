import React from 'react';
import CountUp from 'react-countup';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GooglePlayIcon from 'modules/_partials/_drawable/icons/googlePlayIcon';
import AppleIcon from 'modules/_partials/_drawable/icons/appleIcon';
import engageLearning from 'helpers/db/engageLearning';
import InViewport from 'modules/_partials/InViewport';

const frames = [
  {
    title:
      'Kezas are doubling their class scores by learning through animations',
    sourceLink: 'https://www.youtube.com/embed/ttsMVZJpxWk',
  },
  {
    title:
      'Interact with the real world objects using technology - augmented reality',
    sourceLink:
      'https://www.benimananiyizibyose.com/Markerless/viewAR.php?id=4',
  },
  {
    title:
      'Enjoy learning in all languages "Kiyarwanda, English and French"',
    sourceLink: 'https://www.youtube.com/embed/iCj1fRpySKk',
  },

  {
    title: 'Fellow students are enjoying these educating games',
    sourceLink: 'https://sigarwanda.com/webBuild/',
  },
  {
    title: 'Learn from Rwanda and Africa superheroes',
    sourceLink: 'https://www.youtube.com/embed/ttsMVZJpxWk',
  },
];

const EngageLearning = ({ featuresRef }) => {
  const [view, setView] = React.useState(false);
  const [current, setCurrent] = React.useState(0);
  const [currentEngage, setCurrentEngage] = React.useState(0);
  const handleNext = () => {
    if (frames.length - 1 > current) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };
  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(frames.length - 1);
    }
  };
  const handleEnter = React.useCallback(() => {
    setView(true);
  }, []);
  const handleLeave = React.useCallback(() => {
    setView(false);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center px-4 md:px-8 mt-6 w-full">
        <div className="w-full flex flex-col md:max-w-6xl">
          <h1 className="text-xl text-center w-full md:px-12 md:text-2xl font-bold tracking-wide text-transparent bg-gradient-to-r bg-clip-text from-[#AF5858] via-[#E84D8A] to-[#FEB326]">
            {frames[current].title}
          </h1>
          <div className="flex justify-between items-center mt-4">
            <button
              type="button"
              // disabled={current <= 0}
              onClick={handlePrev}
              className="text-brand-blue"
            >
              <ChevronLeftIcon fontSize="large" />
            </button>
            <iframe
              width="100%"
              height="550"
              src={frames[current].sourceLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              type="button"
              onClick={handleNext}
              // disabled={current >= frames.length - 1}
              className="text-brand-blue"
            >
              <ChevronRightIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={featuresRef}
        className="mt-12 inline-grid md:grid-cols-2 w-full"
      >
        <div
          className="p-4 min-h-screen flex flex-col items-center bg-center bg-cover bg-no-repeat w-full"
          style={{
            backgroundImage: `url(${engageLearning[currentEngage].cover})`,
          }}
        >
          <div className="flex items-center mt-auto space-x-6">
            <button
              type="button"
              className="flex items-center space-x-2 px-12 py-4 rounded-[30px] bg-white font-medium"
            >
              <GooglePlayIcon />
              <span>Download app</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-2 px-12 py-4 rounded-[30px] bg-white font-medium"
            >
              <AppleIcon />
              <span>Download app</span>
            </button>
          </div>
        </div>
        <div className="bg-brand-blue flex flex-col items-center p-4 text-white">
          <div className="flex space-x-3 items-center w-full md:px-8">
            {engageLearning.map((element, index) => (
              <button
                key={`engage_${engageLearning.indexOf(element)}`}
                type="button"
                onClick={() => setCurrentEngage(index)}
                className={`w-8 h-8 text-center rounded-full border border-white ${
                  currentEngage === index
                    ? 'bg-white text-gray-800'
                    : 'text-white'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <InViewport
            onEnterViewport={handleEnter}
            onLeaveViewport={handleLeave}
          />
          <h3 className="text-4xl md:text-8xl tracking-wider font-black mt-20">
            {/* {engageLearning[currentEngage].total} */}
            {view ? (
              <CountUp
                start={1}
                end={engageLearning[currentEngage].count}
                delay={0}
              />
            ) : null}
            +
          </h3>

          <p className="mt-3">{engageLearning[currentEngage].type}</p>
          <p className="md:max-w-sm leading-relaxed mt-20">
            {engageLearning[currentEngage].description}
          </p>
        </div>
      </div>
    </>
  );
};

export default EngageLearning;

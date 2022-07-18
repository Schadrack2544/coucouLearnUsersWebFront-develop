import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import star from 'assets/images/star.png';
import partners from 'helpers/db/partners';

const Partners = () => {
  const [current, setCurrent] = React.useState(0);
  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(partners.length - 1);
    }
  };
  const handleNext = () => {
    if (current < partners.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };
  return (
    <div className="flex flex-col items-center px-4 md:px-8 mt-6 w-full">
      <div className="w-full gap-y-12 flex flex-col md:max-w-6xl">
        <h1 className="text-xl w-full md:px-12 md:text-2xl font-bold tracking-wide">
          Partners
        </h1>
        <div className="flex items-center mt-4">
          <button
            type="button"
            onClick={handlePrev}
            className="text-brand-blue"
          >
            <ChevronLeftIcon fontSize="large" />
          </button>
          <div className="inline-grid gap-x-3 md:grid-cols-2">
            <div className="flex flex-col relative items-center bg-[#C4C4C4] p-24 rounded-[30px]">
              <img
                src={partners[current].logo}
                alt=""
                className="h-24 w-[50px] -top-12 object-cover absolute"
              />
              <p className="italic md:max-w-sm text-base md:text-lg">
                {partners[current].description}
              </p>
              <button
                type="button"
                className="px-12 py-4 rounded bg-brand-blue text-white mt-6"
                
                
              >
                <a href="https://www.newtimes.co.rw/entertainment/rwandan-trio-keen-making-reading-more-fun-augmented-reality-books" target="_blank"> Read More</a>
                
              </button>
            </div>
            <div className="hidden md:flex flex-col relative items-center bg-[#C4C4C4] p-24 rounded-[30px]">
              <img
                src={
                  current < partners.length - 1
                    ? partners[current + 1].logo
                    : partners[0].logo
                }
                alt=""
                className="h-24 w-[50px] -top-12 object-cover absolute"
              />
              <p className="italic md:max-w-sm text-base md:text-lg">
                {current < partners.length - 1
                  ? partners[current + 1].description
                  : partners[0].description}
              </p>
              <button
                type="button"
                className="px-12 py-4 rounded bg-brand-blue text-white mt-6"
              >
                <a href="https://www.ktpress.rw/2021/01/young-rwandans-introduce-augmented-reality-in-book-reading/" target="_blank"> Read More</a>
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={handleNext}
            className="text-brand-blue"
          >
            <ChevronRightIcon fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;

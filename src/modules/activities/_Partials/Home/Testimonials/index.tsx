import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Avatar } from '@mui/material';
import jules from 'assets/images/jules.png';
import testimonials from 'helpers/db/testimonials';

const Testimonials = () => {
  const [current, setCurrent] = React.useState(0);
  return (
    <div className="flex flex-col items-center px-4 md:px-8 mt-12 w-full">
      <div className="w-full flex flex-col md:max-w-6xl">
        <h1 className="text-xl w-full md:px-12 md:text-2xl font-bold tracking-wide text-transparent bg-gradient-to-r bg-clip-text from-[#AF5858] via-[#E84D8A] to-[#FEB326]">
          Testimonials
        </h1>
        <div className="flex relative flex-col items-center mt-4 bg-[#EEDA36] rounded-[30px] px-12 py-8">
          <p className="text-xl md:text-2xl tracking-wider text-center md:max-w-md">
            {testimonials[current].message}
          </p>
          <div className="italic flex flex-col items-center pt-8 pb-16">
            <p>{testimonials[current].name}</p>
            <p>{testimonials[current].address}</p>
          </div>
          <div className="absolute -bottom-[92px] flex flex-col items-center">
            <Avatar
              src={testimonials[current].avatar}
              style={{ width: '128px', height: '128px' }}
            />
            <div className="flex items-center space-x-6 pt-3">
              {testimonials.map((element, index) => (
                <button
                  key={`testimonials_${testimonials.indexOf(
                    element,
                  )}`}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`${
                    index === current
                      ? 'text-brand-blue'
                      : 'text-[#C4C4C4]'
                  }`}
                >
                  <CircleIcon fontSize="large" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import RocketIcon from 'modules/_partials/_drawable/icons/rocketIcon';
import tutors from 'helpers/db/tutors';
import Tutor from 'assets/images/tutor.svg';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#193059',
  },
  '& .MuiRating-iconHover': {
    color: '#193059',
  },
});

const ColorButton = styled(Button)({
  textTransform: 'none',
  backgroundColor: '#193059',
  borderRadius: '50px',
  fontSize: '16px',
  width: '250px',
  padding: '10px',
  '&:hover': {
    backgroundColor: '#193059',
  },
  margin: '50px 0px',
});

const MeetTutors = () => {
  const [current, setCurrent] = React.useState(0);
  const [value, setValue] = React.useState<number | null>(2);
  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(tutors.length - 1);
    }
  };
  const handleNext = () => {
    if (current < tutors.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };
  return (
    <div className="grid grid-cols-3 items-center">
      <div className="flex flex-col items-center px-4 md:px-8">
        <div className="flex flex-col items-center space-y-2 text-xl md:text-5xl font-black tracking-wider">
          <span>Meet the</span>
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#AF5858] via-[#E84D8A] to-[#FEB326]">
            Tutors
          </span>
        </div>
        <ColorButton variant="contained" startIcon={<RocketIcon />}>
          Discover More
        </ColorButton>
      </div>
      <div className="col-span-2 bg-brand-yellow p-10">
        <div className="flex items-center space-x-3">
          <div className="w-[300px] h-[300px] relative">
            <StyledRating
              name="simple-controlled"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                position: 'absolute',
                left: '170px',
                top: '10px',
              }}
            />
            <img
              src={Tutor}
              alt="tutor"
              className="w-full h-full border-[#193059] border-4"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg md:text-2xl font-bold">
              {tutors[current].name}
            </h2>
            <p className="text-lg text-white mt-2">
              {tutors[current].bio}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-12 float-right">
          <button
            type="button"
            onClick={handlePrev}
            className="rounded-full bg-white h-12 w-12 flex flex-col items-center justify-center"
          >
            <ArrowBackIcon />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="rounded-full bg-white h-12 w-12 flex flex-col items-center justify-center"
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetTutors;

import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import manzi from 'assets/images/manzi.png';
import bgButton from 'assets/images/bgButton.svg';
import BrandButton from '../BrandButton';

const PopupLogin = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="px-4 bg-transparent top-[110px] absolute w-full flex flex-col items-center">
      <div className="z-50 px-12 md:px-24 py-4 md:py-8 flex flex-col bg-[#10B981] w-full md:max-w-xl rounded-3xl">
        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 ml-auto rounded-full border-2 p-1 text-white border-white"
        >
          <CloseIcon />
        </button>
        <div className="flex items-center w-full">
          <div
            className="flex h-[200px] w-[294px] bg-left bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${manzi})` }}
          />
          <div className="flex flex-col px-3">
            <p className="text-white text-base md:text-xl">coucou,</p>
            <p className="text-white text-base md:text-xl mb-12">
              You must be logged in to access this content
            </p>
            <BrandButton
              label="Login"
              bgImage={bgButton}
              onClick={() => navigate('/student/login')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupLogin;

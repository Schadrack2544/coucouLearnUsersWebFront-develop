import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserWidget from 'modules/widgets/UserWidget';
import WaveIcon from 'modules/_partials/_drawable/icons/waveIcon';
import bookIcon from 'assets/images/icons/bookIcon.png';
import audioIcon from 'assets/images/icons/audioIcon.png';
import cardIcon from 'assets/images/icons/cardIcon.png';
import recorderIcon from 'assets/images/icons/recorderIcon.png';
import Topper from '../_Partials/Dashboard/Topper';

const LibraryActivity = () => {
  const navigate = useNavigate();
  return (
    <UserWidget>
      <Topper title="Library" />
      <div className="px-4 my-4 flex space-x-3">
        <WaveIcon />
        <p className="md:max-w-xl text-base">
          coucou, Here you listen to amazing books to make you happier
          and learn at the same time!
        </p>
      </div>
      <div className="p-4 gap-x-10 gap-y-6 inline-grid grid-cols-2">
        <button
          type="button"
          onClick={() => navigate('/contents/library/books')}
          className="flex flex-col items-center space-y-3 px-4 py-3 rounded-lg border border-gray-200"
        >
          <img
            src={bookIcon}
            alt=""
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
          <span className="font-semibold text-base">Books zone</span>
        </button>
        <button
          type="button"
          className="flex flex-col items-center space-y-3 px-4 py-3 rounded-lg border border-gray-200"
        >
          <img
            src={audioIcon}
            alt=""
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
          <span className="font-semibold text-base">Audio zone</span>
        </button>

        <button
          type="button"
          className="flex flex-col items-center space-y-3 px-4 py-3 rounded-lg border border-gray-200"
        >
          <img
            src={cardIcon}
            alt=""
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
          <span className="font-semibold text-base">
            Flashcards zone
          </span>
        </button>
        <button
          type="button"
          className="flex flex-col items-center space-y-3 px-4 py-3 rounded-lg border border-gray-200"
        >
          <img
            src={recorderIcon}
            alt=""
            className="w-32 h-32 md:w-48 md:h-48 object-contain"
          />
          <span className="font-semibold text-base">
            My recordings
          </span>
        </button>
      </div>
    </UserWidget>
  );
};

export default LibraryActivity;

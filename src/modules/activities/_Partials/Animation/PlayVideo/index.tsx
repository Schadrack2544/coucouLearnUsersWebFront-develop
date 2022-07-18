import React from 'react';
import { Player, ControlBar } from 'video-react';
import { Avatar } from '@mui/material';
import CommentIcon from 'modules/_partials/_drawable/icons/commentIcon';
import jules from 'assets/images/jules.png';
import Keys from 'api/utils/constants/keys';
import Secure from 'helpers/secureLS';
import endpoints from 'api/utils/constants/endpoints';
import VideoFooter from '../VideoFooter';

const PlayVideo = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row w-full p-4 md:space-x-3">
      <div className="md:w-[60%] flex flex-col">
        <Player autoPlay src={data?.webUrl} />
        {data ? (
          <VideoFooter data={{ ...data, avatar: jules }} />
        ) : null}
      </div>
      <div className="mt-6 md:mt-0 flex bg-[#F8F8F8] flex-col md:w-[40%] rounded-[30px]">
        <div className="flex items-center md:justify-center bg-white rounded-[30px] px-4 md:py-3">
          <button
            type="button"
            className="cursor-auto flex text-base md:text-lg font-bold items-center space-x-1"
          >
            <CommentIcon />
            <span>120 comments</span>
          </button>
        </div>
        <div className="flex flex-col p-4">
          <div className="mt-3 flex space-x-2 sm:space-x-5">
            <Avatar src={jules} alt="Jules" />
            <div className="flex flex-col">
              <h2 className="flex space-x-2 justify-between">
                <span className="font-semibold">Kamaliza Ane</span>
                <span className="text-gray-600 whitespace-nowrap">
                  2 days ago
                </span>
              </h2>
              <p className="mt-1">
                This contents is good. It made me learn quickly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;

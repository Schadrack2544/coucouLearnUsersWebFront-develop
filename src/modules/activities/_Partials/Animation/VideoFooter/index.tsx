import React from 'react';
import { Avatar } from '@mui/material';
import ta from 'time-ago';
import LikeIcon from 'modules/_partials/_drawable/icons/likeIcon';
import CommentIcon from 'modules/_partials/_drawable/icons/commentIcon';
import DownloadIcon from 'modules/_partials/_drawable/icons/downloadIcon';
import ShareIcon from 'modules/_partials/_drawable/icons/shareIcon';
import VerifiedIcon from 'modules/_partials/_drawable/icons/verifiedIcon';

const VideoFooter = ({ data }) => {
  const {
    title,
    likes,
    comments,
    contentCreator,
    unit,
    createdAt,
    avatar,
  } = data;
  return (
    <>
      <div className="flex flex-wrap justify-between items-center space-x-6 mt-3">
        <h1 className="font-bold whitespace-nowrap truncate text-lg md:text-xl">
          {title}
        </h1>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            className="flex items-center space-x-1"
          >
            <LikeIcon />
            <span>{likes}</span>
          </button>
          <button
            type="button"
            className="flex items-center space-x-1"
          >
            <CommentIcon />
            <span>{comments}</span>
          </button>
          <button
            type="button"
            className="flex items-center space-x-1"
          >
            <DownloadIcon />
          </button>
          <button
            type="button"
            className="flex items-center space-x-1"
          >
            <ShareIcon />
          </button>
        </div>
      </div>
      <div className="font-bold flex items-center space-x-1">
        <p className="whitespace-nowrap truncate">{unit}</p>
        <p>.</p>
        <p className="whitespace-nowrap">{ta.ago(createdAt)}</p>
      </div>
      <div className="font-bold flex items-center space-x-3">
        {avatar ? <Avatar src={avatar} /> : null}
        <div className="flex items-center space-x3">
          <p>{contentCreator}</p>
          <VerifiedIcon />
        </div>
      </div>
    </>
  );
};

export default VideoFooter;

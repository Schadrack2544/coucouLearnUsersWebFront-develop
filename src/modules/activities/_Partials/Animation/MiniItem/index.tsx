import React from 'react';
import { useNavigate } from 'react-router-dom';
import ta from 'time-ago';
import { useNavbar } from 'modules/contexts/NavbarContext';
import VideoFooter from '../VideoFooter';

const MiniItem = ({ data }) => {
  const { id, slug, duration, featuredImage } = data;
  const { clientHeaderRef } = useNavbar();
  const navigate = useNavigate();
  const handleClick = () => {
    clientHeaderRef.current?.scrollIntoView();
    navigate(`/contents/animations/${slug}`);
  };
  return (
    <div
      role="button"
      onClick={handleClick}
      onKeyDown={handleClick}
      tabIndex={0}
      className="cursor-pointer flex flex-col bg-white w-full"
    >
      <div
        className="relative flex flex-col items-end justify-end bg-left-top bg-cover bg-no-repeat min-h-[300px]"
        style={{ backgroundImage: `url(${featuredImage})` }}
      >
        <p className="ml-auto bg-black right-2 bottom-4 absolute text-white font-semibold px-2 py-1 rounded-sm">
          {duration}
        </p>
      </div>
      <VideoFooter data={data} />
    </div>
  );
};

export default MiniItem;

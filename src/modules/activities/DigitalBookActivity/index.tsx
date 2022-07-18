import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserWidget from 'modules/widgets/UserWidget';
import WaveIcon from 'modules/_partials/_drawable/icons/waveIcon';
import cover from 'assets/images/cover.png';
import CoinIcon from 'modules/_partials/_drawable/icons/coinIcon';
import StarIcon from 'modules/_partials/_drawable/icons/starIcon';
import PageIcon from 'modules/_partials/_drawable/icons/pageIcon';
import MutedIcon from 'modules/_partials/_drawable/icons/mutedIcon';
import AugmentIcon from 'modules/_partials/_drawable/icons/augmentIcon';
import BeginnerIcon from 'modules/_partials/_drawable/icons/beginnerIcon';
import TimeIcon from 'modules/_partials/_drawable/icons/timeIcon';
import PopupBook from 'modules/_partials/PopupBook';
import Topper from '../_Partials/Dashboard/Topper';

const books = [
  {
    id: 1,
    cover,
    title: "Amazi n' umuriro",
    price: 'Free',
    publisher: 'Image we publisher',
    pages: 15,
    stars: 3,
    duration: '15 minutes',
    type: 'Beginners',
  },
  {
    id: 2,
    cover,
    title: "Amazi n' umuriro",
    price: 'Free',
    publisher: 'Image we publisher',
    pages: 15,
    stars: 2,
    duration: '15 minutes',
    type: 'Beginners',
  },
  {
    id: 3,
    cover,
    title: "Amazi n' umuriro",
    price: 'Free',
    publisher: 'Image we publisher',
    pages: 15,
    stars: 4,
    duration: '15 minutes',
    type: 'Beginners',
  },
];

const DigitalBookActivity = () => {
  const [open, setOpen] = React.useState(false);
  const [current, setCurrent] = React.useState(null);
  const navigate = useNavigate();
  const handleClick = (index: number) => {
    // navigate(`/contents/library/books/${id}`);
    setOpen(true);
    setCurrent(books[index]);
  };
  return (
    <>
      {open ? (
        <PopupBook onClose={() => setOpen(false)} data={current} />
      ) : null}
      <UserWidget>
        <Topper title="Digital Books" />
        <div className="px-4 my-4 flex space-x-3">
          <WaveIcon />
          <p className="md:max-w-xl text-base">
            coucou, Here you get access to fun games that were
            developed to support what you learnt in class!
          </p>
        </div>
        <div className="p-4 gap-x-10 gap-y-6 inline-grid sm:grid-cols-2 w-full md:max-w-4xl">
          {books.map((element, index) => (
            <div
              role="button"
              tabIndex={0}
              onClick={() => handleClick(index)}
              onKeyDown={() => handleClick(index)}
              className="cursor-pointer group relative flex flex-col w-full min-h-[400px] bg-gray-400 bg-center bg-no-repeat bg-cover rounded-[30px]"
              style={{ backgroundImage: `url(${element.cover})` }}
            >
              <div className="group-hover:hidden p-1 top-0 right-0 absolute flex items-center space-x-2">
                {new Array(5).fill(0).map((_, eleIndex) => (
                  <StarIcon
                    // eslint-disable-next-line react/no-array-index-key
                    key={`star_${eleIndex}`}
                    color={
                      element.stars > eleIndex ? '#193059' : 'white'
                    }
                  />
                ))}
              </div>
              <div className="hidden space-y-4 group-hover:flex flex-col p-8 justify-center absolute top-0 left-0 flex-grow bg-gray-400 bg-opacity-50 w-full h-full rounded-[30px]">
                <div className="flex items-center space-x-3">
                  <PageIcon />
                  <p className="text-white text-base font-semibold">
                    {element.pages}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <MutedIcon />
                  <p className="text-white text-base font-semibold">
                    No narration
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <AugmentIcon />
                  <p className="text-white text-base font-semibold">
                    Augmentable
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <BeginnerIcon />
                  <p className="text-white text-base font-semibold">
                    {element.type}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <TimeIcon />
                  <p className="text-white text-base font-semibold">
                    {element.duration}
                  </p>
                </div>
              </div>
              <div className="group-hover:hidden mt-auto flex items-center justify-between space-x-4 bg-brand-blue rounded-[30px] text-white p-4">
                <div className="flex flex-col max-w-[80%]">
                  <h1 className="text-xl md:text-2xl font-semibold w-full truncate">
                    {element.title}
                  </h1>
                  <p className="mt-1">{element.publisher}</p>
                </div>
                <p className="flex items-center">
                  <CoinIcon />
                  <span>: Free</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </UserWidget>
    </>
  );
};

export default DigitalBookActivity;

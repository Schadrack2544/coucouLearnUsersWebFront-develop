import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import listenIcon from 'assets/images/icons/listenIcon.svg';
import readIcon from 'assets/images/icons/readIcon.svg';
import listenReadIcon from 'assets/images/icons/listenReadIcon.svg';

const PopupBook = ({ onClose, data }) => {
  const navigate = useNavigate();
  return (
    <div className="px-4 bg-black bg-opacity-25 fixed z-50 bg-transparent top-0 p-4 md:p-8 items-center h-screen overflow-y-auto left-0 w-full flex flex-col">
      <div className="z-50 px-12 md:px-24 py-4 md:py-8 flex flex-col bg-[#F8F8F8] w-full md:max-w-2xl rounded-3xl">
        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 ml-auto rounded-full border-2 p-1 text-brand-blue border-brand-blue"
        >
          <CloseIcon />
        </button>
        <div className="flex flex-col items-center w-full px-4 md:px-8">
          <h1 className="text-xl md:text-2xl text-brand-blue font-semibold">
            {data.title}
          </h1>
          <div className="flex flex-col items-center px-4 md:px-8 w-full">
            <div
              className="flex min-h-[200px] max-h-[50vh] w-full bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${data.cover})` }}
            />
            <div className="flex items-center space-x-3">
              <h3 className="flex flex-col">
                <span>{data.publisher}</span>
                <span className="text-xs">10 books</span>
              </h3>
            </div>
          </div>
        </div>
        <h4 className="text-lg md:text-xl mt-6">Description</h4>
        <p className="text-gray-600 mt-4">
          Lorem Ipsum est un texte d&apos;espace réservé couramment
          utilisé dans les industries graphique, imprimée et
          éditoriale pour prévisualiser les mises en page et les
          maquettes visuelles
        </p>
        <p className="text-gray-600">
          Lorem Ipsum est un texte d&apos;espace réservé couramment
          utilisé dans les industries graphique, imprimée et
          éditoriale pour prévisualiser les mises en page et les
          maquettes visuelles
        </p>
        <div className="flex mt-4 space-x-3 md:space-x6 items-center justify-center">
          <button
            type="button"
            className="bg-[#F97316] bg-opacity-60 rounded-[30px] flex flex-col items-center text-white text-base font-medium px-6 py-4 space-y-2"
            onClick={()=>{
              navigate(`/contents/library/books/readlistenbook`);
            }}
          >
            <img
              src={listenReadIcon}
              alt=""
              className="w-16 h-16 object-cover"
            />
            <span>Read and Listen</span>
          </button>
          <button
            type="button"
            className="items-center bg-[#F97316] bg-opacity-60 rounded-[30px] flex flex-col text-white text-base font-medium px-6 py-4 space-y-2"
            onClick={()=>{
              navigate(`/contents/library/books/listenbook`);
            }}
          >
            <img
              src={listenIcon}
              alt=""
              className="w-16 h-16 object-cover"
            />
            <span>Listen Only</span>
          </button>
          <button
            type="button"
            className="items-center bg-[#F97316] bg-opacity-60 rounded-[30px] flex flex-col text-white text-base font-medium px-6 py-4 space-y-2"
            onClick={()=>{
              navigate(`/contents/library/books/readbook`);
            }}
          >
            <img
              src={readIcon}
              alt=""
              className="w-16 h-16 object-cover"
            />
            <span>Read Only</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupBook;

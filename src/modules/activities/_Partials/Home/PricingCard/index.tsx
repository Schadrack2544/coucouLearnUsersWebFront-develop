import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';

const PricingCard = ({ title, features, price }) => {
  const navigate = useNavigate();
  const handleClick = () => {};
  return (
    <div className="flex flex-col items-center px-6 py-8 border border-[#DBDBDB] rounded drop-shadow-sm hover:scale-105">
      <h4 className="text-base md:text-xl font-bold">{title}</h4>
      <p className="text-lg md:text-2xl font-black my-4">{price}</p>
      <p className="text-xs text-[#787486]">per user, per month</p>
      <button
        onClick={handleClick}
        type="button"
        className={`${
          title === 'Ingenzi'
            ? 'bg-brand-blue text-white'
            : 'bg-white'
        } w-full px-2 text-center py-3 border-[3px] border-brand-blue font-bold outline-none rounded mt-3`}
      >
        Choose Plan
      </button>

      <div className="bg-[#DDDDDD] h-[1px] w-24 my-4" />

      <div className="flex flex-col">
        {features.map(element => (
          <p key={element} className="flex space-x-2 mt-2">
            <CheckIcon />
            <span>{element}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  features: PropTypes.array,
};

PricingCard.defaultProps = {
  title: 'Ubuntu',
  price: '0 Frw',
  features: [
    'Create up to projects',
    'AR contenets: image, audio video',
  ],
};

export default PricingCard;

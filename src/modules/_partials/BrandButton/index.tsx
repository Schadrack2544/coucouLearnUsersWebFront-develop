import React from 'react';
import bgBlueButton from 'assets/images/svg/bgBlueButton.svg';

interface IBrandButton {
  label: string;
  onClick: any;
  bgImage?: string;
}
const BrandButton = ({ onClick, label, bgImage }: IBrandButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="ml-auto px-16 py-3 rounded-lg bg-center bg-cover bg-no-repeat uppercase font-medium text-brand-blue"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {label}
    </button>
  );
};

BrandButton.defaultProps = {
  bgImage: bgBlueButton,
};

export default BrandButton;

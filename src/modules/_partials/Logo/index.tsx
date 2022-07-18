import React from 'react';
import { Link } from 'react-router-dom';
import brand from 'assets/images/brandLogo.svg';
import logo from 'assets/images/logo.svg';
import newLogo from 'assets/images/newLogo.svg';

interface ILogo {
  isBrand?: boolean;
}
const Logo = ({ isBrand }: ILogo) => {
  return (
    <Link to="/" className="flex flex-row items-center w-full">
      <img
        src={isBrand ? newLogo : newLogo}
        alt=""
        className="w-[100px] h-[70px] self-center"
      />
      <p className="text-[#193059] font-semibold text-[25px] pt-5 hidden sm:flex">
        Augmented Future
      </p>
    </Link>
  );
};
Logo.defaultProps = {
  isBrand: false,
};
export default Logo;

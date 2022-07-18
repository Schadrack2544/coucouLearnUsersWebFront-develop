import React from 'react';
import { Link } from 'react-router-dom';
import newLogo from 'assets/images/logoBig.png';

interface ILogo {
  isBrand?: boolean;
}
const Logo = ({ isBrand }: ILogo) => {
  return (
    <Link to="/" className="flex flex-row items-center w-full">
      <img
        src={isBrand ? newLogo : newLogo}
        alt=""
        className="w-[150px] h-[150px] self-center"
      />
    </Link>
  );
};
Logo.defaultProps = {
  isBrand: false,
};
export default Logo;

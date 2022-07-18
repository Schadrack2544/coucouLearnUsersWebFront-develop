import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.svg';

const AuthWidget = ({
  children,
  type,
  desc,
  alternativeText,
  path,
  label,
}) => {
  return (
    <div className="bg-brand-blue md:px-32 md:py-4 flex flex-col items-center justify-center overflow-y-auto w-full h-screen md:bg-brand-black">
      <div className="w-full bg-brand-blue text-gray-100 flex flex-col items-center md:max-w-3xl xl:max-w-2xl p-4 md:px-8">
        <Link to="/login">
          <img src={logo} alt="" className="w-[200px] h-[150px]" />
        </Link>
        <h2 className="text-gray-400 mt-2 text-base">
          Admin contents
        </h2>
        <h1 className="mt-4 text-4xl font-bold text-white">{type}</h1>
        <p className="mt-4 text-center text-gray-400">{desc}</p>
        {children}
        <p className="text-xs mt-6">
          {alternativeText}{' '}
          <Link
            to={path}
            className="text-[#3751FF] font-semibold whitespace-nowrap"
          >
            {label}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthWidget;

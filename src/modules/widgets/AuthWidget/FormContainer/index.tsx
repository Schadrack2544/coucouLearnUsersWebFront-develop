import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FormContainer = ({ type, children }) => {
  return (
    <div className="w-full bg-white text-gray-800 flex flex-col items-center my-auto">
      <h1 className="text-xl tracking-wide md:text-2xl xl:text-4xl font-bold">
        Coucou Learn
      </h1>
      <p className="text-brand-gray font-light text-xs text-center mt-2">
        A one stop center for engaging Rwanda&apos;s competency based
        curriculum courses
      </p>
      <div className="flex space-x-4 items-center justify-center w-full my-4">
        <div className="h-[1px] bg-[#F5F5F5] flex-grow" />
        <p className="text-gray-400 text-sm font-thin">Learn</p>
        <div className="h-[1px] bg-[#F5F5F5] flex-grow" />
      </div>
      {children}
      <p className="text-gray-600 text-xs mt-4">
        {type === 'login'
          ? 'Not yet in the Coucou Learn? '
          : 'Already has a Coucou account? '}{' '}
        <Link
          to={type === 'login' ? '/signup' : '/login'}
          className="text-[#193059] font-semibold whitespace-nowrap"
        >
          {type === 'login' ? 'Sign up' : 'Sign in'}
        </Link>
      </p>
    </div>
  );
};

FormContainer.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};
FormContainer.defaultProps = {
  type: 'login',
};

export default FormContainer;

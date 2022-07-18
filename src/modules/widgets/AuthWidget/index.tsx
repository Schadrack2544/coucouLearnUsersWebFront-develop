import React from 'react';
import PropTypes from 'prop-types';
import waveFigure from 'assets/images/waveFigure.svg';

const AuthWidget = ({ children }) => {
  return (
    <div className="flex-grow grid md:grid-cols-2 overflow-y-auto w-full h-screen bg-white">
      <div
        className="w-full h-full bg-center bg-cover bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${waveFigure}` }}
      />
      <div className="flex flex-col w-full items-center  overflow-y-auto p-8 md:p-12 xl:px-24">
        {children}
      </div>
    </div>
  );
};

AuthWidget.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthWidget;

import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="">
      404 - Page not found
      <Link to="/">Home</Link>
    </div>
  );
};

export default PageNotFound;

import React from 'react';

const shopActivity = () => {
  React.useEffect(() => {
    window.location = 'https://augmented-future.com/shop';
  }, []);
  return <p className="text-2xl font-light m-auto">Please wait...</p>;
};

export default shopActivity;

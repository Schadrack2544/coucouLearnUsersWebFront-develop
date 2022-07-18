import React from 'react';
import handleViewport from 'react-in-viewport';

const Block = props => {
  const { forwardedRef } = props;
  return <div ref={forwardedRef} className="invisible" />;
};

const InViewport = handleViewport(
  Block /** options: {}, config: {} **/,
);

export default InViewport;

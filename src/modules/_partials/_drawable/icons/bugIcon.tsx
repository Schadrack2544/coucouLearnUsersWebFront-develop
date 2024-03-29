import React from 'react';
import PropTypes from 'prop-types';

const bugIcon = ({ className }) => {
  return (
    <svg
      width="16"
      height="18"
      className={className}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 5H13.19C12.739 4.21774 12.1168 3.54767 11.37 3.04L13 1.41L11.59 0L9.42 2.17C8.96 2.06 8.49 2 8 2C7.51 2 7.04 2.06 6.59 2.17L4.41 0L3 1.41L4.62 3.04C3.88 3.55 3.26 4.22 2.81 5H0V7H2.09C2.04 7.33 2 7.66 2 8V9H0V11H2V12C2 12.34 2.04 12.67 2.09 13H0V15H2.81C3.85 16.79 5.78 18 8 18C10.22 18 12.15 16.79 13.19 15H16V13H13.91C13.96 12.67 14 12.34 14 12V11H16V9H14V8C14 7.66 13.96 7.33 13.91 7H16V5ZM10 13H6V11H10V13ZM10 9H6V7H10V9Z"
        fill="#DD2E44"
      />
    </svg>
  );
};

bugIcon.propTypes = {
  className: PropTypes.string,
};

bugIcon.defaultProps = {
  className: '',
};

export default bugIcon;

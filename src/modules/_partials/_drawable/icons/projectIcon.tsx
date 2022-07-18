import React from 'react';
import PropTypes from 'prop-types';

const ProjectIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 9H15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16H15"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 19H22"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 17L20 21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="20"
        cy="19"
        r="5.25"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

ProjectIcon.propTypes = {
  color: PropTypes.string,
};
ProjectIcon.defaultProps = {
  color: '#09B151',
};

export default ProjectIcon;

import React from 'react';

const StarIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 40 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.7508 20.0212H24.4383L20.0009 2.38354L15.5634 20.0212H1.25098L12.8134 30.9057L8.43844 48.4639L20.0009 37.5794L31.5633 48.4639L27.1258 30.8263L38.7508 20.0212Z"
        fill={color}
      />
    </svg>
  );
};

StarIcon.defaultProps = {
  color: 'white',
};

export default StarIcon;

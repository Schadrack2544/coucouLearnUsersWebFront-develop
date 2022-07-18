import React from 'react';
import Popover from '@mui/material/Popover';
import CheckIcon from '@mui/icons-material/Check';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const PopupSelect = ({
  elements,
  label,
  onClick,
}: {
  elements: string[];
  label: string;
  onClick: (id: number) => void;
}) => {
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (index: number) => {
    handleClose();
    onClick(index);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="flex items-center justify-between space-x-3 py-3 px-4 border border-brand-blue mt-1 rounded-lg"
      >
        <span>{label}</span>
        <ArrowDropDownIcon />
      </button>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handleClose}
        open={open}
        anchorEl={anchorEl}
      >
        <div className="flex flex-col py-2 rounded-[30px]">
          {elements.map((element, index) => (
            <button
              key={element}
              type="button"
              onClick={() => handleChange(index)}
              className="space-x-12 hover:bg-gray-400 hover:bg-opacity-25 flex items-center justify-between font-medium px-3 py-2"
            >
              <span className="whitespace-nowrap">{element}</span>
              <span
                className={`text-brand-blue ${
                  element === label ? 'visible' : 'invisible'
                }`}
              >
                <CheckIcon />
              </span>
            </button>
          ))}
        </div>
      </Popover>
    </>
  );
};

export default PopupSelect;

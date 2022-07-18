/* eslint-disable no-console */
import React from 'react';
import Popover from '@mui/material/Popover';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import { withStyles } from '@mui/styles';

const MyPopover = withStyles({
  root: {
    '& .MuiPaper-elevation': {
      background: 'white',
      borderRadius: '8px',
      marginTop: '4px',
    },
  },
})(Popover);

interface IActionButton {
  onChangeCategory?: (index: number) => void;
  item?: {
    items: string[];
    label: string;
  };
}
const ActionButton = ({ item, onChangeCategory }: IActionButton) => {
  const [current, setCurrent] = React.useState(0);
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
  const handleChangeCategory = (index: number) => {
    handleClose();
    setCurrent(index);
    onChangeCategory(index);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <div className="flex flex-col items-center">
        <p>{item.label}</p>
        <button
          aria-describedby={id}
          type="button"
          onClick={handleClick}
          className="mt-3 flex text-blue-500 space-x-3 px-8 py-2 items-center rounded-lg border border-blue-500"
        >
          <span>{item.items[current]}</span>
          <ExpandMoreIcon />
        </button>
      </div>
      <MyPopover
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
          {item.items.map((element, index) => (
            <button
              key={element}
              type="button"
              onClick={() => handleChangeCategory(index)}
              className="flex items-center hover:bg-gray-100 justify-between space-x-6 w-full px-4 py-1 min-w-[128px]"
            >
              <span>{element}</span>
              {current === index ? (
                <CheckIcon className="text-brand-blue" />
              ) : null}
            </button>
          ))}
        </div>
      </MyPopover>
    </>
  );
};

ActionButton.defaultProps = {
  onChangeCategory() {},
  item: {
    items: ['REB', 'USA', 'King Academy'],
    label: 'Curriculum',
  },
};
export default ActionButton;

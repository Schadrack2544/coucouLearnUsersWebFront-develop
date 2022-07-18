import React from 'react';
import Popover from '@mui/material/Popover';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';
import { withStyles } from '@mui/styles';
import children from 'assets/images/children.svg';
import usergroup from 'assets/images/svg/usergroup.svg';
import appointment from 'assets/images/svg/appointment.svg';

const MyPopover = withStyles({
  root: {
    '& .MuiPaper-elevation': {
      background: '#F97316E5',
      borderRadius: '30px',
    },
  },
})(Popover);

const PopupUserLinks = ({ current, onChangeUser }) => {
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
  const handleChangeUser = index => {
    handleClose();
    onChangeUser(index);
  };
  const getCurrentIcon = () => {
    switch (current) {
      case 1:
        return children;
      case 2:
        return usergroup;
      case 3:
        return appointment;
      default:
        return children;
    }
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="flex items-end space-x-1"
      >
        <img src={getCurrentIcon()} alt="" className="h-12" />
        <ArrowDropDownIcon />
      </button>
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
        <div className="flex flex-col py-2 text-white rounded-[30px]">
          <button
            type="button"
            onClick={() => handleChangeUser(1)}
            className="text-base flex items-center space-x-1 font-bold px-2 py-3"
          >
            <img src={children} alt="" className="h-6" />
            <span>Student</span>
            {current === 1 ? (
              <CheckIcon className="ml-auto text-brand-blue" />
            ) : null}
          </button>
          <button
            type="button"
            onClick={() => handleChangeUser(2)}
            className="text-base flex items-center space-x-1 font-bold px-2 py-3"
          >
            <img src={usergroup} alt="" className="h-6" />
            <span>Parent/Guardian</span>
            {current === 2 ? (
              <CheckIcon className="ml-auto text-brand-blue" />
            ) : null}
          </button>
          <button
            type="button"
            onClick={() => handleChangeUser(3)}
            className="text-base flex items-center space-x-1 font-bold px-2 py-3"
          >
            <img src={appointment} alt="" className="h-6" />
            <span>Tutor</span>
            {current === 3 ? (
              <CheckIcon className="ml-auto text-brand-blue" />
            ) : null}
          </button>
        </div>
      </MyPopover>
    </>
  );
};

export default PopupUserLinks;

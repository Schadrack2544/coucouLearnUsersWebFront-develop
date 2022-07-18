import React from 'react';
import Popover from '@mui/material/Popover';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { withStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import learningContents from 'helpers/db/learningContents';

const MyPopover = withStyles({
  root: {
    '& .MuiPaper-elevation': {
      background: '#F97316E5',
      borderRadius: '30px',
    },
  },
})(Popover);

const PopupContentLinks = ({ onChooseContent }) => {
  const navigate = useNavigate();
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
  const handleChangeContent = path => {
    handleClose();
    onChooseContent(path);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="py-3 font-medium"
      >
        <span>Learning Contents</span>
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
          {learningContents.map(element => (
            <button
              key={`content_${learningContents.indexOf(element)}`}
              type="button"
              onClick={() => handleChangeContent(element.path)}
              className="group hover:rounded-b-lg hover:bg-gray-400 hover:bg-opacity-25 text-base flex items-center space-x-1 font-bold px-2 py-3"
            >
              <img src={element.icon} alt="" className="h-6" />
              <span>{element.content}</span>
              <span className="ml-auto text-brand-blue hidden group-hover:block">
                <ChevronRightIcon />
              </span>
            </button>
          ))}
        </div>
      </MyPopover>
    </>
  );
};

export default PopupContentLinks;

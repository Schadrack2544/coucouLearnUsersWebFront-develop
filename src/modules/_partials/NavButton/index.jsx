import React from 'react';
import PropTypes from 'prop-types';
import ProjectIcon from 'modules/_partials/_drawable/icons/projectIcon';

const NavButton = ({ label, onClick, className, icon }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      <span className="min-w-[24px] min-h-[24px]">{icon}</span>
      <span className="truncate">{label}</span>
    </button>
  );
};

NavButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.node,
};

NavButton.defaultProps = {
  label: 'Create new project',
  onClick() {},
  className:
    'w-full flex items-center space-x-[12px] py-2 px-3 rounded',
  icon: <ProjectIcon />,
};

export default NavButton;

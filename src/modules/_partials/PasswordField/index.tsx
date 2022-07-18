import React from 'react';
import PropTypes from 'prop-types';
import EyeOff from '../_drawable/icons/eyeOff';
import EyeOn from '../_drawable/icons/eyeOn';

const PasswordField = ({
  placeholder,
  name,
  label,
  id,
  value,
  onChange,
  labelClass,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className={`font-medium ${labelClass}`}>{label}</span>
      <div className="relative flex items-center">
        <input
          type={!showPassword ? 'password' : 'text'}
          id={id}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 outline-none focus:border-[#193059] w-full p-3 pr-10 md:py-4 rounded-md border border-brand-gray placeholder:text-brand-gray placeholder:text-xs"
        />
        <button
          type="button"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          className="right-3 absolute"
        >
          {showPassword ? <EyeOff /> : <EyeOn />}
        </button>
      </div>
    </label>
  );
};

PasswordField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  labelClass: PropTypes.string,
};
PasswordField.defaultProps = {
  placeholder: 'Write your password',
  name: 'password',
  id: 'password',
  label: 'Password',
  labelClass: '',
  onChange() {},
};

export default PasswordField;

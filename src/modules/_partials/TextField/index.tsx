import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  placeholder,
  name,
  label,
  id,
  type,
  onChange,
  value,
  labelClass,
}) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className={`font-medium ${labelClass}`}>{label}</span>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 peer outline-none focus:border-[#193059] w-full p-3 md:py-4 rounded-md border font-bold border-brand-gray placeholder:text-brand-gray placeholder:font-normal placeholder:text-xs"
      />
    </label>
  );
};

TextField.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  labelClass: PropTypes.string,
};
TextField.defaultProps = {
  placeholder: 'Write your email',
  label: 'Email',
  name: 'email',
  id: 'email',
  type: 'email',
  onChange() {},
  labelClass: '',
};

export default TextField;

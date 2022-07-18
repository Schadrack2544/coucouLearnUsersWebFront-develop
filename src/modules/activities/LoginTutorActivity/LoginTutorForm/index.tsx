/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import bgBlueButton from 'assets/images/svg/bgBlueButton.svg';

const schema = yup
  .object({
    password: yup.string().required('Password is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid'),
  })
  .required();

const LoginTutorForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    navigate('/contents/game-zone');
  };
  return (
    <div className="flex flex-col py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <label htmlFor="email" className="flex flex-col space-y-1">
          <span className="peer-focus:text-brand-blue px-2">
            Email
          </span>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="peer w-full outline-none border border-gray-300 focus:border-brand-blue rounded px-2 py-3"
          />
          <p className="px-2 text-red-500">{errors.email?.message}</p>
        </label>

        <label
          htmlFor="password"
          className="flex flex-col space-y-1 mt-4"
        >
          <span className="peer-focus:text-brand-blue px-2">
            Password
          </span>
          <input
            id="password"
            type="password"
            {...register('password')}
            className="peer w-full outline-none border border-gray-300 focus:border-brand-blue rounded px-2 py-3"
          />
          <p className="px-2 text-red-500">
            {errors.password?.message}
          </p>
        </label>
        <button
          type="submit"
          className="mt-6 rounded-lg uppercase font-medium bg-center bg-cover bg-no-repeat px-12 py-3 w-full"
          style={{ backgroundImage: `url(${bgBlueButton})` }}
        >
          Login
        </button>
      </form>
      <p className="mt-3">
        Don&apos;t have an account?{' '}
        <Link
          to="/tutor/register"
          className="font-semibold text-brand-blue"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginTutorForm;

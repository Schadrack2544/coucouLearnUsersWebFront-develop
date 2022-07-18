/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import bgButton from 'assets/images/svg/bgButton.svg';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    password: yup.string().required('Password is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid'),
  })
  .required();

const RegisterTutorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <div className="flex flex-col py-8">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <label htmlFor="name" className="flex flex-col space-y-1">
          <span className="peer-focus:text-brand-blue px-2">
            Name
          </span>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="peer w-full outline-none border border-gray-300 focus:border-brand-blue rounded px-2 py-3"
          />
          <p className="px-2 text-red-500">{errors.name?.message}</p>
        </label>
        <label
          htmlFor="email"
          className="flex flex-col space-y-1 mt-4"
        >
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
          htmlFor="grade"
          className="flex flex-col relative space-y-1 mt-4"
        >
          <span className="peer-focus:text-brand-blue px-2">
            Grade
          </span>
          <input
            id="grade"
            type="button"
            className="peer w-full outline-none border border-gray-300 focus:border-brand-blue rounded px-2 py-3"
          />
          <ArrowDropDownIcon className="right-2 bottom-3 absolute" />
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
        <label
          htmlFor="confirm-password"
          className="flex flex-col space-y-1 mt-4"
        >
          <span className="peer-focus:text-brand-blue px-2">
            Confirm password
          </span>
          <input
            id="confirm-password"
            type="password"
            className="peer w-full outline-none border border-gray-300 focus:border-brand-blue rounded px-2 py-3"
          />
        </label>
        <button
          type="submit"
          className="mt-6 rounded-lg uppercase font-medium bg-center bg-cover bg-no-repeat px-12 py-3 w-full"
          style={{ backgroundImage: `url(${bgButton})` }}
        >
          Register
        </button>
      </form>

      <p className="mt-1">
        By signup you agree our{' '}
        <span className="font-semibold text-brand-blue">
          Terms of service
        </span>{' '}
        and{' '}
        <span className="font-semibold text-brand-blue">
          Privacy policy
        </span>
      </p>
      <p className="mt-3">
        Already have an account?{' '}
        <Link
          to="/tutor/login"
          className="font-semibold text-brand-blue"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterTutorForm;

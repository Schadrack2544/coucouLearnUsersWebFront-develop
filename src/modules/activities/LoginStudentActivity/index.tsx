import React from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import registerStudent from 'assets/images/svg/registerStudent.svg';
import yellowLogo from 'assets/images/svg/yellowLogo.svg';
import flagRwanda from 'assets/images/svg/flagRwanda.svg';
import children from 'assets/images/children.svg';
import RegisterStudentForm from './LoginStudentForm';

const LoginStudentActivity = () => {
  return (
    <div className="bg-white flex min-h-screen w-full">
      <div className="flex flex-col justify-center w-full md:w-[40%] p-4 md:px-8 overflow-y-auto scrollbar">
        <Link to="/home">
          <img src={yellowLogo} alt="" className="h-[48px]" />
        </Link>
        <div className="flex justify-between items-center gap-x-3 py-4">
          <button type="button" className="gap-x-2 flex items-center">
            <img src={children} alt="" className="h-[32px]" />
            <ArrowDropDownIcon />
          </button>
          <button type="button" className="gap-x-2 flex items-center">
            <img src={flagRwanda} alt="" className="h-[32px]" />
            <span>Rwanda</span>
            <ArrowDropDownIcon />
          </button>
        </div>
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
          coucou, Welcome back!With us learning is enjoyable
        </h1>
        <RegisterStudentForm />
      </div>
      <div
        className="hidden md:block w-[60%] p-32 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${registerStudent})` }}
      >
        <p className="text-lg tracking-wide">
          see more do more be more
        </p>
      </div>
    </div>
  );
};

export default LoginStudentActivity;

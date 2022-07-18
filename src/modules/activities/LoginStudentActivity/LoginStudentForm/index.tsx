import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import bgBlueButton from 'assets/images/svg/bgBlueButton.svg';
import { signin } from 'core/shared/actions/authAction';

const schema = yup
  .object({
    password: yup.string().required('Password is required'),
    email: yup
      .string()
      .required('Email is required')
      .email('Email is invalid'),
  })
  .required();

const LoginStudentForm = ({ loading, onLogin }) => {
  const navigate = useNavigate();
  const [snack, setSnack] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onRegister = data => {
    onLogin(data.email, data.password)
      .then(result => {
        if (result) {
          setSnack({
            severity: 'success',
            message: result.message || 'Login successfully',
          });
          navigate('/onboard/student');
        }
      })
      .catch(error => {
        setSnack({
          severity: 'error',
          message: error.message || 'Login failed, try again',
        });
      });
  };
  const onSubmit = event => {
    handleSubmit(data => onRegister(data))(event);
  };
  return (
    <>
      <Snackbar
        onClose={() => setSnack(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        key="topleft"
        autoHideDuration={5000}
        open={snack !== null}
      >
        <Alert
          onClose={() => setSnack(null)}
          severity={snack?.severity}
          sx={{ width: '100%' }}
        >
          {snack?.message}
        </Alert>
      </Snackbar>
      <div className="flex flex-col py-8">
        <form onSubmit={onSubmit} className="w-full">
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
            <p className="px-2 text-red-500">
              {errors.email?.message}
            </p>
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
            {!loading ? (
              'Login'
            ) : (
              <CircularProgress
                color="inherit"
                style={{ width: '24px', height: '24px' }}
              />
            )}
          </button>
        </form>
        <p className="mt-3">
          Don&apos;t have an account?{' '}
          <Link
            to="/student/register"
            className="font-semibold text-brand-blue"
          >
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  loading: state.me.loading,
});
const mapDispatchToProps = dispatch => ({
  onLogin: (email, password) => dispatch(signin(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginStudentForm);

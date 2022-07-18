import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminAuthWidget from 'modules/widgets/AdminAuthWidget';
import PasswordField from 'modules/_partials/PasswordField';
import TextField from 'modules/_partials/TextField';
import { signin } from 'core/shared/actions/authAction';
import isAuth from 'helpers/isAuth';

const ForgetPasswordActivity = ({ me, onLogin }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
  });
  const onInputChange = ({ target }) => {
    setErrors({ ...errors, [target.name]: '' });
    setCredentials({ ...credentials, [target.name]: target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const err = { email: '', password: '' };
    if (!credentials.email) {
      err.email = 'Email is required';
      isValid = false;
    }
    if (!credentials.password) {
      err.password = 'Password is required';
      isValid = false;
    }
    setErrors({ ...errors, ...err });
    return isValid;
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (validateForm()) {
      onLogin(credentials.email, credentials.password).then(() => {
        setCredentials({ email: '', password: '' });
      });
    }
  };

  React.useEffect(() => {
    if (isAuth()) {
      navigate('/dashboard');
    }
  }, [me]);

  return (
    <AdminAuthWidget
      type="Forgot password?"
      desc="Please enter the email address you registered with. we'll send instructions to reset your password."
      alternativeText="Back to"
      path="/login"
      label="Login"
    >
      <form className="flex text-gray-800 flex-col w-full mt-4">
        <div className="w-full">
          <TextField
            labelClass="text-gray-100"
            value={credentials.email}
            name="email"
            onChange={onInputChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs px-3 mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={me.loading}
          onClick={handleSubmit}
          className={`mt-8 hover:bg-opacity-95 px-4 py-4 text-gray-800 bg-brand-yellow rounded-md font-bold text-xl tracking-wide && ${
            me.loading && 'cursor-not-allowed opacity-25'
          }`}
        >
          Send
        </button>
      </form>
    </AdminAuthWidget>
  );
};

const mapStateToProps = state => ({
  me: state.me,
});

const mapDispatchToProps = dispatch => ({
  onLogin: (email: string, password: string) =>
    dispatch(signin(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgetPasswordActivity);

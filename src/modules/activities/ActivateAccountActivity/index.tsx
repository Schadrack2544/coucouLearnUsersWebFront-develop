import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import swal from 'sweetalert';
import DefaultApi from 'api/restful';
import Constants from 'api/utils/constants';

const ActivateAccountActivity = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const onActivate = async () => {
    const response = await DefaultApi.PostRoute.postRoute(
      Constants.Endpoints.CONFIRM_ENDPOINT,
      { token: searchParams.get('activation') },
    );
    const { data } = response;
    if (data && data.user?.active) {
      await swal(
        'Activated!',
        'Your account was successfully activated, please login',
        'success',
      );
    } else {
      await swal(
        'Oops!',
        'Failed to activating an account, try again',
        'error',
      );
    }
    navigate('/student/login', { replace: true });
  };

  React.useEffect(() => {
    onActivate();
  }, []);
  return (
    <div className="text-brand-blue font-semibold m-auto">
      Activating account...
    </div>
  );
};

export default ActivateAccountActivity;

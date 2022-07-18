import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from 'core/shared/actions/authAction';
import Secure from 'helpers/secureLS';

const LogoutActivity = ({ onLogout }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    onLogout().then(() => {
      Secure.removeToken();
      window.history.pushState(
        null,
        document.title,
        window.location.href,
      );
      window.addEventListener('popstate', () => {
        window.history.pushState(
          null,
          document.title,
          window.location.href,
        );
      });
      navigate('/student/login', { replace: true });
    });
  }, []);
  return (
    <div className="text-red-500 text-2xl md:text-4xl animate-pulse tracking-wide font-semibold m-auto">
      Logout...
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(LogoutActivity);

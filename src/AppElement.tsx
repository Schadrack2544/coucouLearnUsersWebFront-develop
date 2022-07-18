import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useNavbar } from 'modules/contexts/NavbarContext';
import { syncyAuth } from 'core/shared/actions/authAction';
import LoginActivity from './modules/activities/LoginActivity';

const AppElement = ({ route, onSyncAuth }) => {
  const { pathname } = useLocation();
  const authenticated = onSyncAuth();
  const excludes = ['/login'];
  const navigate = useNavigate();
  const { setCurrentTab, setRoute } = useNavbar();

  if (route.name) {
    document.title = route.name;
  }
  React.useEffect(() => {
    if (route.guestOnly && authenticated) {
      navigate('/onboard/student');
    }

    /** * @Protected - session rounting config */
    if (route.protected && !authenticated) {
      navigate('/student/login');
    }
    if (excludes.includes(route.path) && authenticated) {
      navigate('/onboard/student');
    }
    if (route.currentTab) {
      setCurrentTab(route.currentTab);
    }
    setRoute(route);
  }, [pathname]);
  return <route.component />;
};

AppElement.propTypes = {
  route: PropTypes.object,
};
AppElement.defaultProps = {
  route: {
    name: 'Coucou',
    protected: false,
    guestOnly: false,
    path: '/login',
    component: LoginActivity,
  },
};

const mapDispatchToProps = dispatch => ({
  onSyncAuth: () => dispatch(syncyAuth()),
});

export default connect(null, mapDispatchToProps)(AppElement);

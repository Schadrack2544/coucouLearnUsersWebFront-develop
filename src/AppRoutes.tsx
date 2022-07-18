import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import AppElement from 'AppElement';

const AppRoutes = ({ routes }) => {
  return (
    <Routes>
      {routes.map(route => (
        <Route
          key={route.name}
          path={route.path}
          element={<AppElement route={route} />}
        />
      ))}
    </Routes>
  );
};

AppRoutes.propTypes = {
  routes: PropTypes.instanceOf(Array),
};

AppRoutes.defaultProps = {
  routes: [],
};

export default AppRoutes;

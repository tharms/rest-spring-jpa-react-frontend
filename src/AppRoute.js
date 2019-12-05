import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const AppRoute = ({ component: Component,  ...rest }) => (
  <Route
    {...rest}
    render={props => (
        <Component {...props} />
    )}
  />
);

AppRoute.propTypes = {
  component: PropTypes.any.isRequired,
};

export default AppRoute;

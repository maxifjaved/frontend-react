import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import cx from 'classnames'

import styles from './userRoute.module.css'

const loadingStyle = {
  height: 'calc(100vh - 184px)',
  overflow: 'hidden',
}

const UserRoute = ({ isLoading, isAuthenticated, component: Component, ...rest }) => (
  <div
    style={isLoading ? loadingStyle : null}
  >
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />}
    />
  </div>
);

UserRoute.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isLoading: state.loading.isLoading,
    isAuthenticated: state.user.username
  };
}

export default connect(mapStateToProps)(UserRoute);
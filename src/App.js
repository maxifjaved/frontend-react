import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import Loader from './components/common/Loader'
import GuestRoute from './components/routes/GuestRoute'
import RegistrationForm from './components/auth/RegistrationForm'
import LoginForm from './components/auth/LoginForm'

const App = ({ location, isLoading, isAuthenticated }) => (
  <div>
    <Loader spinning={isLoading} fullScreen={true} />
    <GuestRoute
      location={location}
      path="/register"
      exact
      component={RegistrationForm}
    />

    <GuestRoute
      location={location}
      path="/login"
      exact
      component={LoginForm}
    />
  </div>
)
function mapStateToProps(state) {
  return {
    isLoading: state.loading.isLoading
  }
}

export default connect(mapStateToProps, null)(App);

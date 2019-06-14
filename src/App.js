import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Loader from './components/common/Loader'
import GuestRoute from './components/routes/GuestRoute'
import UserRoute from './components/routes/UserRoute'
import RegistrationForm from './components/auth/RegistrationForm'
import LoginForm from './components/auth/LoginForm'
import Users from './components/users'
import Discovery from './components/discovery'
import Chats from './components/chats'

const App = ({ location, isLoading, isAuthenticated }) => (
  <div>
    <Loader spinning={isLoading} fullScreen={true} />
    <UserRoute
      location={location}
      path="/"
      exact
      component={Users}
    />
    <UserRoute
      location={location}
      path="/discovery"
      exact
      component={Discovery}
    />
    <UserRoute
      location={location}
      path="/chats"
      exact
      component={Chats}
    />
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

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isLoading: state.loading.isLoading,
    isAuthenticated: !state.user.username
  }
}

export default connect(mapStateToProps)(App);

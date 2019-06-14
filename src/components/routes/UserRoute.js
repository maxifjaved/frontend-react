import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

import Layout from '../layout'

const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Layout>
        <Component {...props} />
      </Layout> : <Redirect to="/login" />}
  />
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.username
  };
}

export default connect(mapStateToProps)(UserRoute);
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './auth.module.css'

class Auth extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired
  };

  static defaultProps = {
    type: 'login'
  };

  render() {
    const { type } = this.props
    return (
      <div className={cx(styles.form, styles[type])}>
        <div className={styles.logo}>
          <img alt="logo" src={'https://res.cloudinary.com/maxifjaved/image/upload/v1552308757/avatarHolder_nqtkl1.jpg'} />
          <span>Auth Application</span>
        </div>
        {this.props.children}
      </div>
    );


  }
}

export default Auth;

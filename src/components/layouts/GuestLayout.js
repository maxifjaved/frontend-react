import React from "react"
import { Link } from "react-router-dom"
import { Menu, Icon } from 'antd';

class GuestLayout extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="login">
          <Link to="/login">
            <Icon type="login" />
            Login
          </Link>
        </Menu.Item>

        <Menu.Item key="register">
          <Link to="/register">
            <Icon type="user" />
            Register
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default GuestLayout
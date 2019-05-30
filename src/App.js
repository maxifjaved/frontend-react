import React from 'react';

import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class App extends React.Component {
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
          <Icon type="login" />
          Login
        </Menu.Item>
        <Menu.Item key="register">
          <Icon type="user" />
          Register
        </Menu.Item>
      </Menu>
    );
  }
}

export default App;

import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
import styles from './index.module.css';

const { Header, Sider, Content } = Layout;


class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Link to="/">
            <div className={styles.logo}>
              {/* <img alt="logo" src={'https://res.cloudinary.com/maxifjaved/image/upload/v1552308757/avatarHolder_nqtkl1.jpg'} /> */}
              <span>Auth App</span>
            </div>
          </Link>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="user" />
                <span>User Management</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/discovery">
                <Icon type="video-camera" />
                <span>Discovery</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/chats">
                <Icon type="message" />
                <span>User Chat</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <div className={styles.container}>
          <Header style={{ height: 64, boxShadow: "0 1px 4px rgba(0, 21, 41, 0.08)", background: '#fff', padding: '0 12px 0 0' }}>
            <Icon
              style={{ fontSize: 25, padding: '0 24px' }}
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className={styles.content} >
            {this.props.children}
          </Content>
        </div>
      </Layout>
    );
  }
}

BasicLayout.propTypes = {}

export default BasicLayout
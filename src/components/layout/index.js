import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon, Dropdown, Avatar } from 'antd';
import styles from './index.module.css';
import { from } from 'rxjs';

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
    const { currentUser } = this.props
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={() => { }}>
        <Menu.Item disabled>
          <Icon type="user" />Personal Center
        </Menu.Item>
        <Menu.Item disabled>
          <Icon type="setting" />Setting
        </Menu.Item>
        <Menu.Item key="triggerError">
          <Icon type="close-circle" />Trigger error
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />Sign out
        </Menu.Item>
      </Menu>
    );

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
          <Header className={styles.header}>
            <Icon
              style={{ fontSize: 25, padding: '0 24px' }}
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <div className={styles.right}>
              <Dropdown overlay={menu}>
                <span className={`${styles.action} ${styles.account}`}>
                  <Avatar size="small" className={styles.avatar} src={currentUser.image} />
                  <span className={styles.name}>{currentUser.username}</span>
                </span>
              </Dropdown>
            </div>
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


function mapStateToProps(state) {
  return {
    currentUser: state.user
  };
}
export default connect(mapStateToProps)(BasicLayout)
import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Form, Icon, Input, Button, Checkbox } from 'antd'

import { login } from '../../actions/auth'

import Auth from './Auth'
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values)
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Auth type="login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('identifier', {
              rules: [{ required: true, message: 'Please input your username/email!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username/Email"
              />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(<Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a href="">
              Forgot password
              </a>
            <Button type="primary" htmlType="submit">
              Log in
              </Button>
            Or <Link to="/register"> register now! </Link>
          </Form.Item>
        </Form>
      </Auth >
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default connect(null, { login })(WrappedNormalLoginForm);

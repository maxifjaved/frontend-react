import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'

import { login } from '../../actions/auth'
import { loader } from '../../actions/loader'

import Auth from './Auth'
class NormalLoginForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let nsg_message = message.loading('Action in progress..', 0)
        this.props.login(values).then(data => {
          nsg_message(0.2)
          message.success('Loading finished')
        }).catch(error => {
          console.error(error)
          if (error.response) {
            const { errors } = error.response.data
            nsg_message(0.2)
            message.error(errors.form)
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });


        this.props.loader(false)
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

export default connect(null, { login, loader })(WrappedNormalLoginForm);

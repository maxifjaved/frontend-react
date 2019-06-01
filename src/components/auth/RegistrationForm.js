import React from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import {
  Form,
  Input,
  Icon,
  Select,
  Checkbox,
  Button,
  DatePicker
} from 'antd'
import Auth from './Auth'

import { register } from '../../actions/auth'

const { Option } = Select

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {

      if (!err) {
        this.props.register(values)
        // console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirmationPassword'], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;


    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '92',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
        <Option value="92">+92</Option>
      </Select>,
    );

    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    return (
      <Auth type="register">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
            })(<Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />)}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
            />)}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator('confirmationPassword', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password
              onBlur={this.handleConfirmBlur}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Confirm Password"
            />)}
          </Form.Item>

          <Form.Item >
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number!' }],
            })(<Input
              addonBefore={prefixSelector} style={{ width: '100%' }}
              prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Phone Number"
            />)}
          </Form.Item>
          <Form.Item >
            {getFieldDecorator('dob', config)(<DatePicker style={{ width: '100%' }}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', width: '100%' }} />}
              placeholder="Date Of Birth"
            />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please select your gender!' }],
            })(
              <Select
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)', width: '100%' }} />}
                placeholder="Select Gender"
              >
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>,
            )}
          </Form.Item>

          <Form.Item >
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>,
            )}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Register
          </Button>
            Or <Link to="/login"> login now! </Link>
          </Form.Item>
        </Form>
      </Auth>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default connect(null, { register })(WrappedRegistrationForm);

import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon } from 'antd';

const searchFormField = {
  username: 'Username',
  email: 'Email',
  phonenumber: 'Phone Number',
  gender: 'Gender'
}
class SearchForm extends React.Component {

  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];

    for (const sff in searchFormField) {
      console.log(sff)
      children.push(
        <Col span={8} key={`${sff}-${Math.random()}`} >
          <Form.Item label={`${sff}`} labelCol={{ span: 10 }} wrapperCol={{ span: 14 }}>
            {getFieldDecorator(`${sff}`, {
            })(<Input placeholder={`${searchFormField[sff]}`} />)}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    return (
      <Form onSubmit={this.handleSearch}>
        <Row gutter={30} style={{ marginLeft: -8, marginRight: -8 }}>{this.getFields()}</Row>
      </Form>
    );
  }
}

export default Form.create({ name: 'user_search' })(SearchForm);
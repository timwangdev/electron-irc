import React, { Component } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom'

export class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="account-form">
        <Form.Item className="hostname">
          {getFieldDecorator('hostname', {
            rules: [{ required: true, message: 'Please input the hostname!' }],
          })(
            <Input placeholder="Hostname" />
          )}
        </Form.Item>
        <Form.Item className="port">
          {getFieldDecorator('port', {
            rules: [{ required: true, message: 'Please input the port number (defalut: 6667)!'}],
            initialValue: 6667
          })(
            <Input placeholder="Port" type="number" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!' }],
          })(
            <Input placeholder="Nickname" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password')(
            <Input placeholder="Password (Optional)" type="password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('ssl', { initialValue: false })(
            <Checkbox>Encrypt connection using SSL</Checkbox>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{ marginRight: '10px' }}>
            Test connection
          </Button>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    )
  };
}

export default Form.create()(LoginForm);
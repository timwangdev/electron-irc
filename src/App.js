import React, { Component } from 'react';
import { Layout, Menu, Icon, Form, Input, Checkbox, Button } from 'antd';
import './App.css';

const { Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  render() {
    return (
      <Layout className="App">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Account</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Form onSubmit={this.handleSubmit} className="account-form">
              <Form.Item>
                <Input className="hostname" placeholder="Hostname" />
                <Input className="port" placeholder="Port" type="number" defaultValue="6667" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item>
                <Input placeholder="Password (Optional)" type="password" />
              </Form.Item>
              <Form.Item>
                <Checkbox>Encrypt connection using SSL</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button type="primary" style={{ marginRight: '10px'}}>
                  Test connection
                </Button>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
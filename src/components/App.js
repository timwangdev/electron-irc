import React, { Component } from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import LeftMenu from './LeftMenu';
import LoginForm from './LoginForm';
import './App.css';

const { Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  render() {
    return (
      <Router>
        <Layout className="App">
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <LeftMenu />
          </Sider>
          <Layout>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <LoginForm />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
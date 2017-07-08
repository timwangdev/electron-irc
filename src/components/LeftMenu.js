import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

export default class LeftMenu extends Component {
  onMenuClick = ({item, key, keyPath}) => {
    console.log({item, key, keyPath});
  };

  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.onMenuClick}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>Account</span>
        </Menu.Item>
      </Menu>
    )
  };
}
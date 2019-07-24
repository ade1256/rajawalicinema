import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import {
  Layout, Menu, Icon, Input, Row,
} from 'antd';
import 'antd/dist/antd.css';
import '../static/main.less';
const axios = require('axios');
const { Search } = Input;

const {
  Header, Footer, Sider, Content,
} = Layout;

// Define Icon SVG
const CompassSvg = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18C4.05 18 0 13.95 0 9C0 4.05 4.05 0 9 0C13.95 0 18 4.05 18 9C18 13.95 13.95 18 9 18ZM9 0.75C4.4625 0.75 0.75 4.4625 0.75 9C0.75 13.5375 4.4625 17.25 9 17.25C13.5375 17.25 17.25 13.5375 17.25 9C17.25 4.4625 13.5375 0.75 9 0.75ZM4.6875 13.6875C4.575 13.6875 4.5 13.65 4.425 13.575C4.3125 13.4625 4.275 13.3125 4.35 13.1625L6.7875 6.975C6.825 6.8625 6.9 6.7875 7.0125 6.75L13.2 4.3125C13.35 4.275 13.5 4.275 13.6125 4.3875C13.725 4.5 13.7625 4.65 13.6875 4.8L11.25 10.9875C11.175 11.175 10.95 11.2875 10.7625 11.2125C10.575 11.1375 10.4625 10.9125 10.5375 10.725L12.675 5.325L7.4625 7.3875L5.4 12.6L9.225 11.1C9.4125 11.025 9.6375 11.1375 9.7125 11.325C9.7875 11.5125 9.7125 11.7375 9.4875 11.8125L4.875 13.65C4.7625 13.6875 4.725 13.6875 4.6875 13.6875ZM8.3625 9C8.3625 9.16908 8.42966 9.33123 8.54922 9.45078C8.66877 9.57034 8.83092 9.6375 9 9.6375C9.16908 9.6375 9.33123 9.57034 9.45078 9.45078C9.57034 9.33123 9.6375 9.16908 9.6375 9C9.6375 8.83092 9.57034 8.66877 9.45078 8.54922C9.33123 8.42966 9.16908 8.3625 9 8.3625C8.83092 8.3625 8.66877 8.42966 8.54922 8.54922C8.42966 8.66877 8.3625 8.83092 8.3625 9Z" />
  </svg>
);

const SearchSvg = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.1333 27.1333C27.8667 27.4 27.4667 27.4 27.2 27.1333L23.1333 23C21.0667 24.8667 18.3333 26 15.3333 26C8.86666 26 3.66666 20.8 3.66666 14.3333C3.66666 7.86667 8.86666 2.73334 15.3333 2.73334C21.8 2.73334 27 7.93334 27 14.4C27 17.3333 25.8667 20.0667 24.0667 22.0667L28.1333 26.1333C28.4 26.4 28.4 26.8667 28.1333 27.1333ZM15.3333 4.06667C9.59999 4.06667 4.99999 8.66667 4.99999 14.4C4.99999 20.1333 9.59999 24.7333 15.3333 24.7333C21.0667 24.7333 25.6667 20.1333 25.6667 14.4C25.6667 8.66667 21 4.06667 15.3333 4.06667Z" fill="#C1BDEE" />
  </svg>
);

// Define Icon from SVG
const CompassIcon = props => (
  <Icon component={ CompassSvg } { ...props } />
);
const SearchIcon = props => (
  <Icon component={ SearchSvg } { ...props } />
);

class BaseLayoutAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      token: '',
    };
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  handleMenuClick(e) {
    if (e.key === 'listMovie') {
      Router.replace('/admin');
    } else if (e.key === 'categories') {
      Router.push('/admin/categories');
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        </Head>
        <Row>
        <Layout style={ { minHeight: '100vh' } }>
          <Sider
            collapsible
            collapsed={ this.state.collapsed }
            onCollapse={ this.onCollapse }
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={ [ this.props.menuActive ] } mode="inline" onClick={e => this.handleMenuClick(e)}>
              <Menu.Item key="listMovie">
                <Icon type="home" />
                <span>List Movie</span>
              </Menu.Item>
              <Menu.Item key="categories">
                <Icon type="database" />
                <span>Categories</span>
              </Menu.Item>
              <Menu.Item key="countries">
                <Icon type="database" />
                <span>Countries</span>
              </Menu.Item>  
              <Menu.Item key="creators">
                <Icon type="database" />
                <span>Creators</span>
              </Menu.Item>
              <Menu.Item key="genres">
                <Icon type="database" />
                <span>Genres</span>
              </Menu.Item>
            </Menu>
          </Sider>
            <Layout>
            <Header>
            </Header>
            <Content>
              <div style={ { paddingRight: 24, background: 'none', minHeight: 360 } }>
                {this.props.children}
              </div>
            </Content>
            <Footer style={ { textAlign: 'center', color: '#C1BDEE' } }>
              Rajawalicinema ©2019 All right reserved.
            </Footer>
          </Layout>
        </Layout>
        </Row>
      </div>
    );
  }
}

export default BaseLayoutAdmin;


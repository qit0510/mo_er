import React, {Component} from 'react';
import footerStyle from './footer.module.scss';
import {Layout} from 'antd';

const {Footer} = Layout;
export default class MainFooter extends Component {
  render() {
    return (
      <Footer className={footerStyle.footer}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    );
  }
}

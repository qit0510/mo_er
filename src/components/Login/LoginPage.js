import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginStyle from './login.module.scss';
import {actionCreate} from './store/index';
import { Card, Form, Icon, Input, Button, Checkbox, } from 'antd';


const tabList = [{
  key: 'user',
  tab: '账户登录',
}, {
  key: 'email',
  tab: '邮箱登录',
}];


class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      key: 'user',
    };
  }
  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.sendLoading(values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const contentList = {
      user: (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input size='large' className={LoginStyle.inputBtn} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input size='large' className={LoginStyle.inputBtn} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox className={LoginStyle.checkBtn}>Remember me</Checkbox>
            )}
            <a className={LoginStyle.forgot} href="/">Forgot password</a><br/>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button><br/>
            Or <a href="/">register now!</a>
          </Form.Item>
        </Form>

      ),
      email: <p>content2</p>,
    };

    return (
      <div className={LoginStyle.login}>
        <div className={LoginStyle.logo}>
          <div className={LoginStyle.logo_group}>
            <img className={LoginStyle.logo_pic} src={require('../../statics/img/log1_black.png')} alt="LOG" />
            <span className={LoginStyle.logo_name_light}>摩尔</span>
          </div>
        </div>
        <div className={LoginStyle.card}>
          <Card
            style={{ width: '100%' }}
            tabList={tabList}
            activeTabKey={this.state.key}
            onTabChange={(key) => { this.onTabChange(key, 'key'); }}
          >
            {contentList[this.state.key]}
          </Card>
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    // loading: state.get('loadBar').get('loading'),
    // note: state.get('note')
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendLoading(values) {
      return dispatch(actionCreate.sendLoad(values));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginPage));
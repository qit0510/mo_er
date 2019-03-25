import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreate} from './store/index';
import {Form, Input, Tooltip, Icon, Select, Checkbox, Button, AutoComplete,Card } from 'antd';
import style from './register.module.scss';

const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;

class Register extends Component {

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if(values.agreement){
          // /register 注册
          this.props.sendRegister(values);
        }else {
          alert('请确定阅读权限')
        }
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({autoCompleteResult});
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {autoCompleteResult} = this.state;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 5},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 17},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 4
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{width: 70}}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div className={style.register}>
        <div className={style.logo}>
          <div className={style.logo_group}>
            <img className={style.logo_pic} src={require('../../statics/img/log1_black.png')} alt="LOG" />
            <span className={style.logo_name_light}>摩尔</span>
          </div>
          <Card title="注册" bordered={false} style={{ width: 480,margin:'0 auto',}}>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item
                label={(
                  <span>
                  账户&nbsp;
                    <Tooltip title="What do you want others to call you?">
                      <Icon type="question-circle-o"/>
                    </Tooltip>
                  </span>
                )}
              >
                {getFieldDecorator('name', {
                  rules: [{required: true, message: 'Please input your UserName!', whitespace: true}],
                })(
                  <Input/>
                )}
              </Form.Item>
              <Form.Item label="密码">
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  }, {
                    validator: this.validateToNextPassword,
                  }],
                })(
                  <Input type="password"/>
                )}
              </Form.Item>
              <Form.Item label="验证密码">
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: 'Please confirm your password!',
                  }, {
                    validator: this.compareToFirstPassword,
                  }],
                })(
                  <Input type="password" onBlur={this.handleConfirmBlur}/>
                )}
              </Form.Item>
              <Form.Item label="邮箱">
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  }, {
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input/>
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                })(
                  <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">Register</Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
};
const WrappedRegistrationForm = Form.create({ name: 'register' })(Register);

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendRegister(value){
      return dispatch(actionCreate.register(value))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import MainPic from '../articleMainPic/ArticleMainPic';
import Editor from '../Editor/Editor';
import {Form, Input, Select, Checkbox, Button,} from 'antd';
import * as actionCreate from './store/actionCreators';

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {},
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 24},
  },
};

class ArticleForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    mainPic: ''
  };

  componentDidMount() {
    this.props.initData();
  };


  getPicName = (data) => {
    this.setState({mainPic: data});
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.mainPic = this.state.mainPic;
        this.props.getArticleInfo(values);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <MainPic getPicName={this.getPicName}/>
        <FormItem {...formItemLayout} label="标题">
          {getFieldDecorator('title', {
            initialValue: this.props.article && this.props.article.title,
            rules: [{required: true, message: '请输入标题！', whitespace: true}],
          })(
            <Input/>,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="选择文章所属栏目"
          hasFeedback
        >
          {getFieldDecorator('column_id', {
            initialValue: this.props.article && this.props.article.column_id,
            rules: [
              {required: true, message: '请选择文章所属栏目！'},
            ],
          })(
            <Select placeholder="请选择文章所属栏目！">
              {
                this.props.columns.map(item => (<Option key={item.id} value={item.id}>{item.title}</Option>))
              }
            </Select>,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="标签"
        >
          {getFieldDecorator('tag_ids', {
            initialValue: this.props.article && this.props.article.tags && this.props.article.tags.map(item => item.id),
          })(
            <Checkbox.Group>
              {
                this.props.tags.map(item => (<Checkbox key={item.id} value={item.id}>{item.title}</Checkbox>))
              }
            </Checkbox.Group>,
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('content', {
            initialValue: (this.props.article && this.props.article.content) || ''
          })(
            <Editor/>
          )}
        </FormItem>
        <br/>
        <FormItem>
          <Button type="danger" block htmlType="submit">发布文章</Button>
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = (State) => {
  return {
    columns: State.get('articleCreat').get('columns'),
    tags: State.get('articleCreat').get('tags'),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initData() {
      dispatch(actionCreate.getArtCreate());
    },
  };
};
const WrappedRegistrationForm = Form.create()(ArticleForm);
export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);
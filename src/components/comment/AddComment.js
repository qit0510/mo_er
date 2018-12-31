import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Comment, Avatar, Form, Button, List, Input} from 'antd';
import axios from 'axios';
import {actionCreate} from './store/index';


const TextArea = Input.TextArea;

const CommentList = ({comments}) => (
  <List
    itemLayout="horizontal"
    dataSource={comments}
    header={`${comments.length} ${comments.length !== 0 ? '条评论' : '暂无评论'}`}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.user && item.user.avatar}/>}
          title={item.user && item.user.name}
          description={item.content}
        />
      </List.Item>
    )}
  />
);

const Editor = ({onChange, onSubmit, submitting, value,}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value}/>
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class AddComment extends Component {
  state = {
    comments: [],
    submitting: false,
    value: '请输入你的评论',
  }

  componentDidMount() {
    this.props.setCommentData(this.props.article_id);
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }
    this.setState({
      submitting: true,
    });
    axios.post('/api/comment/' + this.props.article_id, {content: this.state.value}).then((res) => {
      this.setState({
        submitting: false,
        value: '请输入你的评论'
      });
      res.data.user = this.props.user;
      this.props.addComment(res.data);
    }).catch((errors) => {
      console.log(errors);
    });
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { submitting, value} = this.state;
    return (
      <div>
        {this.props.user && <Comment
          avatar={(
            <Avatar
              src={this.props.user.avatar}
              alt={this.props.user.name}
            />
          )}
          content={(
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          )}
        />
        }
        {<CommentList comments={this.props.comments}/>}
      </div>
    );

  }
}

const mapStateToProps = (State) => {
  return {
    user: State.get('header').get('user'),
    comments: State.get('comment').get('comments')
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCommentData(id) {
      dispatch(actionCreate.sendComment(id));
    },
    addComment(data) {
      dispatch(actionCreate.addCommentData(data))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import NoteListStyle from './notelist.module.scss';
import {actionCreate} from './store/index';
import LoadBar from '../loadBar/LoadBar';

class NoteList extends Component {
  componentDidMount() {
    this.props.initNoteList(this.props.pathName ? this.props.pathName:'/article/artlist');
  }
  filterHTMLTag = (msg) => {
    msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
    msg = msg.replace(/[|]*\n/, ''); //去除行尾空格
    msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
    return msg;
  }
  render() {
    return (
      <div className={NoteListStyle.listContainer}>
        <ul className={NoteListStyle.noteList}>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={index}>
                  <div className={NoteListStyle.caption}>
                    <a href={'/details/'+item.id}>
                      <h3>{item.title}</h3>
                    </a>
                  </div>
                  <div className={NoteListStyle.content}>
                    <p >
                      {this.filterHTMLTag(item.content)}
                    </p>
                  </div>
                  <div className={NoteListStyle.meta}>
                    <span>作者：{item.user.name} </span>
                    <span>留言：{item.comments_count}</span>
                    <span>赞：{item.up_votes_count}</span>
                    <span>发布时间：{item.created_at}</span>
                  </div>
                </li>
              );
            })
          }
        </ul>
        <LoadBar/>
      </div>
    );
  }
}

const mapStateToProps = (State) => {
  return {
    list: State.get('note').get('list'),
    user:State.get('header').get('user')
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initNoteList(pathName) {
      dispatch(actionCreate.getNoteInfo(pathName));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
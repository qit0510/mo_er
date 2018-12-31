import React, {Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {Spin, Button} from 'antd';
import {actionCreate} from './store/index';

class LoadBar extends Component {
  render() {
    return (
      <Fragment>
        {this.props.path ?
        <Button block onClick={() => this.props.setLoadState(this.props.path)}>
          <Spin spinning={this.props.loading}>
            加载更多...
          </Spin>
        </Button>
          :
          <p style={{textAlign: 'center'}}>无更多内容...</p>
        }
      </Fragment>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    loading: state.get('loadBar').get('loading'),
    path: state.get('note').get('path'),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLoadState(path) {
      dispatch(actionCreate.getMoreaNote(path));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoadBar);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import HotGroomStyle from './hotGroom.module.scss';
import {Card} from 'antd';
import {actionCreate} from './store/index';
import {Link} from 'react-router-dom';
class HotGroom extends Component {
  componentDidMount() {
    this.props.initGroom();
  }
  render() {
    return (
      <div className={HotGroomStyle.hot_groom}>
        <Card
          title="热门推荐"
          extra={<a href="/">More</a>}
        >
          {
            this.props.list && this.props.list.map((item) => {
              return (<Link to={/details/+item.id} key={item.id} href="/"><p type="primary">{item.title}</p></Link>);
            })
          }
        </Card>,
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    list: state.get('hotGroom').get('list')
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initGroom() {
      dispatch(actionCreate.initGroomInfo());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HotGroom);
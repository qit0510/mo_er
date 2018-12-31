import React, {Component} from 'react';
import {connect} from 'react-redux';
import GroomStyle from './groom.module.scss';
import {Button} from 'antd';
import {actionCreate} from './store/index';
import {Link} from 'react-router-dom'

class Groom extends Component {
  componentDidMount() {
    this.props.initGroom();
  }
  render() {
    return (
      <div className={GroomStyle.groom}>
        {
          this.props.list && this.props.list.map((item) => {
            return (
              <Link key={item.id} to={'/tag/' + item.remark}>
                <Button type="primary" key={item.id} ghost>{item.title}</Button>
              </Link>);
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.get('groom').get('list')
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initGroom() {
      dispatch(actionCreate.initGroomInfo());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Groom);
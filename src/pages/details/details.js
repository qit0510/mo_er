import React, {Component} from 'react';
import {connect} from 'react-redux';
import detailsStyle from './details.module.scss';
import {Row, Col, Button, Icon} from 'antd';
import {actionCreate} from './store/index';
import GoodGroom from '../../components/goodGroom/GoodGroom';
import AddComment from '../../components/comment/AddComment';
import axios from 'axios';
import {Link} from 'react-router-dom';
import IDCard from "../../components/IDCard/IDCard";
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isZan: false
    }
  }

  componentDidMount() {
    this.props.initArtisan(this.props.match.params.id);
  }

  handleDelete = (id) => {
    axios.delete('/api/article/' + id + '/delete').then((res) => {
      this.props.history.goBack();
    }).catch((errors) => {
      console.log(errors);
    });
  }
  handleClickZan = () => {
    this.props.changeZan(this.props.artisan.id,this.props.artisan.is_zan);
  }
  render() {
    const icon = () => (
      this.props.user.id === this.props.artisan.user.id &&
      <span>
        <span className={detailsStyle.btn}>
          <Link to='/artcreate'><Button shape="circle" size="small" icon="plus"></Button></Link>
        </span>
        <span className={detailsStyle.btn}>
          <Button shape="circle" size="small" onClick={() => this.handleDelete(this.props.artisan.id)}
                  icon="delete"></Button>
        </span>
        <span className={detailsStyle.btn}>
          <Link to={'/article/' + this.props.artisan.id + '/edit'}><Button shape="circle" size="small"
                                                                           icon="edit"></Button></Link>
        </span>
      </span>
    );
    return (
      <div className={detailsStyle.main}>
        <Row>
          <Col xs={{span: 24, offset: 0}} lg={{span: 24, offset: 0}} xl={{span: 12, offset: 4}}>
            <div className={detailsStyle.mainPic}>
              {(this.props.artisan.mainPic
              ) && <img src={this.props.artisan.mainPic} alt="图"/>}
            </div>
            <div className={detailsStyle.caption}>
              <h2>{this.props.artisan.title}</h2>
            </div>
            <div className={detailsStyle.about}>
              <div className={detailsStyle.avatar}>
                <img src={this.props.artisan.user.avatar} alt=""/>
              </div>
              <div className={detailsStyle.remark}>
                <span className={detailsStyle.auth}><strong>作者：{this.props.artisan.user.name}</strong></span>
                {this.props.user && icon()}
                <br/>
                <span className={detailsStyle.putTime}>发布时间：{this.props.artisan.updated_at}</span>
                <span><Icon className={detailsStyle.icon} type="eye"/>38</span>
                <span><Icon className={detailsStyle.icon} type="notification"/>38</span>
                <span className={detailsStyle.c_icon}>
                  <Icon className={detailsStyle.icon} onClick={this.handleClickZan} style={{'color':this.props.artisan.is_zan? 'red':''}} type="like"/>
                  {this.props.artisan.up_votes_count}
                </span>
              </div>
            </div>
            <div className={detailsStyle.clr}></div>
            <div className={[detailsStyle.content, 'ql-editor'].join(' ')}
                 dangerouslySetInnerHTML={{__html: this.props.artisan.content}}></div>
            {this.props.artisan.id && <AddComment article_id={this.props.artisan.id}/>}
          </Col>
          <Col xs={{span: 0, offset: 0}} lg={{span: 0, offset: 0}} xl={{span: 4, offset: 1}}>
            <div className="un_main">
              <div className={detailsStyle.artisan}>
                <IDCard/>
              </div>
              <div className={detailsStyle.artisan}>
                <GoodGroom/>
              </div>
              <div className={detailsStyle.spc}>
                <GoodGroom/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (State) => {
  return {
    artisan: State.get('detail').get('artisan').toJS(),
    user: State.get('header').get('user'),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initArtisan(id) {
      dispatch(actionCreate.getArisanInfo(id));
    },
    changeZan(id,isZan) {
      dispatch(actionCreate.changeZan(id,isZan));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details);
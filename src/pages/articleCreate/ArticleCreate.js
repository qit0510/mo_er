import React, {Component} from 'react';
import {Row, Col} from 'antd';
import detailsStyle from '../artisan/details.module.scss';
import IDCard from '../../components/IDCard/IDCard';
import HotGroom from '../../components/hotGroom/HotGroom';
import ArticleForm from '../../components/articleForm/ArticleForm';
import axios from 'axios';

class ArticleCreate extends Component {
  getArticleInfo=(data)=>{
    axios.post('/api/article/create',data).then((res) => {
      if (res.status === 204){
        this.props.history.goBack();
      }
    }).catch((errors)=>{
      console.log(errors);
    });
  }
  render() {
    return (
      <Row>
        <Col xs={{span: 24, offset: 0}} lg={{span: 24, offset: 0}} xl={{span: 12, offset: 4}}>
          <ArticleForm getArticleInfo={this.getArticleInfo}/>
        </Col>
        <Col xs={{span: 0, offset: 0}} lg={{span: 0, offset: 0}} xl={{span: 4, offset: 1}}>
          <div className="un_main">
            <div className={detailsStyle.spc}>
              <IDCard/>
            </div>
            <div className={detailsStyle.spc}>
              <HotGroom/>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
export default ArticleCreate;


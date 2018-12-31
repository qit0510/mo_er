import React, {Component} from 'react';
import detailsStyle from './details.module.scss';
import {Row, Col} from 'antd';
import NodeList from '../../components/artlist/NoteList';
import HotGroom from '../../components/hotGroom/HotGroom';
import IDCard from '../../components/IDCard/IDCard';
import GoodGroom from "../../components/goodGroom/GoodGroom";

export default class Details extends Component {
  render() {
    return (
      <div className={detailsStyle.main}>
        <Row>
          <Col xs={{span: 24, offset: 0}} lg={{span: 24, offset: 0}} xl={{span: 12, offset: 4}}>
            <NodeList pathName={this.props.history && this.props.history.location.pathname}/>
          </Col>
          <Col xs={{span: 0, offset: 0}} lg={{span: 0, offset: 0}} xl={{span: 4, offset: 1}}>
            <div className="un_main">
              <div className={detailsStyle.spc}>
                <IDCard/>
              </div>
              <div className={detailsStyle.spc}>
                <HotGroom/>
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

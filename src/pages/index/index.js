import React, {Component} from 'react';
import CarouselFigure from '../../components/carouselfigure/CarouselFigure';
import IndexStyle from './index.module.scss';
import {Row, Col} from 'antd';
import Groom from '../../components/groom/Groom';
import NodeList from '../../components/artlist/NoteList';
import HotGroom from '../../components/hotGroom/HotGroom';
import IDCard from '../../components/IDCard/IDCard';
import axios from 'axios';

export default class index extends Component {

  render() {
    return (
      <div className={IndexStyle.main}>
        <Row>
          <Col xs={{span: 24, offset: 0}} lg={{span: 24, offset: 0}} xl={{span: 12, offset: 4}}>
            <div className={IndexStyle.carousel}>
              <CarouselFigure/>
            </div>
            <div className={IndexStyle.spacing}>
              <Groom className={IndexStyle.main}/>
            </div>
            <NodeList/>
          </Col>
          <Col xs={{span: 0, offset: 0}} lg={{span: 0, offset: 0}} xl={{span: 4, offset: 1}}>
            <div className="un_main">
              <div className={IndexStyle.spc}>
                <IDCard/>
              </div>
              <div className={IndexStyle.spc}>
                <HotGroom/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

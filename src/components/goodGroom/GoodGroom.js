import React, {Component} from 'react';
import goodGroomStyle from './goodGroom.module.scss';
import {Card} from 'antd';

const {Meta} = Card;
export default class GoodGroom extends Component {
  render() {
    return (
      <div className={goodGroomStyle.good_groom}>
        <Card
          hoverable
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
        >
          <Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>,
      </div>
    );
  }
}

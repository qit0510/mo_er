import React, {Component} from 'react';
import {connect} from 'react-redux';
import iDCardStyle from './iDCard.module.scss';
import {Card, Icon, Avatar} from 'antd';

const {Meta} = Card;

class IDCard extends Component {

  render() {
    return (
      <div className={iDCardStyle.card}>
        {this.props.user && (
          <Card
            cover={<img alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
            actions={[
              <a className={iDCardStyle.link} href="/"><Icon type="wechat" theme="outlined"/></a>,
              <a className={iDCardStyle.link} href="/"><Icon type="github" theme="outlined"/></a>,
              <a className={iDCardStyle.link} href="/"><Icon type="weibo-circle" theme="outlined"/></a>
            ]}
          >
            <Meta
              avatar={<Avatar src={this.props.user.avatar}/>}
              title={this.props.user.name}
              description={this.props.user.introduction}
            />
          </Card>)
        }

      </div>
    );
  }
};
const mapStateToProps = (State) => {
  return {
    user: State.get('header').get('user')
  };
};

export default connect(mapStateToProps)(IDCard);

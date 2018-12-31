import React, {Component} from 'react';
import dynamicStyle from './dynamic.module.scss';
import {Card} from 'antd';

const tabList = [{
  key: 'tab1',
  tab: 'tab1',
}, {
  key: 'tab2',
  tab: 'tab2',
}];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

export default class Dynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'tab1',
      noTitleKey: 'app',
    };
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({[type]: key});
  }

  render() {
    return (
      <div className={dynamicStyle.best_dynamic}>
        <Card
          style={{width: '100%'}}
          title="Card title"
          extra={<a href="/">More</a>}
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={(key) => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>
      </div>
    );
  }
}

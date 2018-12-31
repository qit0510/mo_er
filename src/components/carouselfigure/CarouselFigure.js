import React, {Component} from 'react';
import CarouselFStyle from './CarouselFigure.module.scss';
import {Carousel} from 'antd';

export default class CarouselFStyleCarouselFigure extends Component {
  render() {

    return (
      <div className={CarouselFStyle.slickPic}>
        <Carousel effect="fade" autoplay>
          <div className={CarouselFStyle.picItem}>
            <img
              src="//upload.jianshu.io/admin_banners/web_images/4504/8f6fbad5108d79f95a0af380416da37da8263251.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""/>
          </div>
          <div className={CarouselFStyle.picItem}>
            <img
              src="//upload.jianshu.io/admin_banners/web_images/4508/51c89b6ad1d122325ceef64f55228ddb3d537599.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""/>
          </div>
          <div className={CarouselFStyle.picItem}>
            <img
              src="//upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""/>
          </div>
          <div className={CarouselFStyle.picItem}>
            {/*<img*/}
            {/*src="//upload.jianshu.io/admin_banners/web_images/4486/41d9173c44ce6eded75da5f82da659973ddaad41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"*/}
            {/*alt=""/>*/}
          </div>
          <div className={CarouselFStyle.picItem}>
            <img
              src="//upload.jianshu.io/admin_banners/web_images/4501/572782ecf027e81f518edce85f98036e88beb290.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt=""/>
          </div>
        </Carousel>,
      </div>
    );
  }
};
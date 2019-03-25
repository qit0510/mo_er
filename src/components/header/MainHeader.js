import React, {Component} from 'react';
import HeadereStyle from './header.module.scss';
import {connect} from 'react-redux';
import {Switch, Menu, Icon, Affix, Input, Row, Col, Button, Drawer, Popover} from 'antd';
import {actionCreate} from './store/index';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainHeader extends Component {

  componentDidMount() {
    this.props.checkLogin();
    this.props.getColumns();
    this.props.getTags();

  }
  exitLogin = () => {
    axios.get('/api/logout').then(() => {
      this.props.outLogin();
    }).catch((errors) => {
      console.log(errors);
    });
  }

  render() {
    const serve = () => (
      <ul>
        <li><Link to="/"><Button type="dashed" block>我的首页</Button></Link></li>
        <li><Link to="/artcreate"><Button type="dashed" block>写文章</Button></Link></li>
        <li><a href="http://localhost:9000"><Button type="dashed" block>工作台</Button></a></li>
        <li><Button type="dashed" block onClick={this.exitLogin}>退出</Button></li>
      </ul>
    );
    const login = () => (
      <ul>
        <li><Link to='/login'><Button type="dashed" block>登录</Button></Link></li>
        <li><Button type="dashed" block>注册</Button></li>
      </ul>
    );
    console.log(this.props.columns)
    return (
      <Affix offsetTop={0}>
        <div
          className={[HeadereStyle.header, this.props.isDark ? HeadereStyle.header_dark : HeadereStyle.header_light].join(' ')}>
          <Row>
            <Col xs={24} sm={4} md={4} lg={4} xl={3}>
              <div className={HeadereStyle.logo}>
                <div className={HeadereStyle.logo_group}>
                  <img className={HeadereStyle.logo_pic}
                     src={this.props.isDark ? require('../../statics/img/log1_white.png') : require('../../statics/img/log1_black.png')}
                     alt="LOG"/>
                  <span
                    className={this.props.isDark ? HeadereStyle.logo_name_dark : HeadereStyle.logo_name_light}>
                                        摩尔
                  </span>
                </div>
              </div>
            </Col>

            <Col xs={0} sm={20} md={20} lg={14} xl={10}>
              <Menu
                className={HeadereStyle.nav_list}
                theme={this.props.isDark ? 'dark' : 'light'}
                onClick={this.props.handleClick}
                selectedKeys={[this.props.current]}
                mode="horizontal"
              >
                <Menu.Item key="recommend">
                  <Link to='/'>
                    <Icon type="bank" theme="outlined"/>
                    推荐
                  </Link>
                </Menu.Item>
                {
                  this.props.columns && this.props.columns.map((item) => {
                    if (item.column.length !== 0) {
                      return (
                        <SubMenu key={'parent' + item.id} title={<span className="submenu-title-wrapper">
                          <Icon type="shop" theme="outlined"/>{item.title}</span>}>
                          <MenuItemGroup title={item.title}>
                            {item.column.map((children) => {
                              return (
                                <Menu.Item key={'children' + children.id}>
                                  <Link to={'/' + item.remark + '/' + children.remark}>
                                    {children.title}
                                  </Link>
                                </Menu.Item>
                              )
                            })}
                          </MenuItemGroup>
                        </SubMenu>
                      )
                    } else {
                      return null;
                    }
                  })
                }
                {/*<Menu.Item key="communication">*/}
                  {/*<Link to='/communication'>*/}
                    {/*<Icon type="bank" theme="outlined"/>*/}
                    {/*交流*/}
                  {/*</Link>*/}
                {/*</Menu.Item>*/}
              </Menu>
            </Col>
            <Col xs={0} sm={0} md={0} lg={6} xl={4}>
              <div className={HeadereStyle.search}>
                <Search placeholder="input search text" onSearch={value => console.log(value)} style={{width: 200}} size="large"/>
              </div>
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={4}>
              <div className={HeadereStyle.tools}>
                <span><Icon type="setting" onClick={this.props.showDrawer} theme="outlined"/></span>
                <Drawer
                  title="设置"
                  placement="right"
                  closable={false}
                  onClose={this.props.onClose}
                  visible={this.props.visible}
                >
                  <p>
                    <span>夜间模式：</span>
                    <Switch onChange={this.props.setBackground} checkedChildren="开"
                      unCheckedChildren="关" defaultChecked/>
                  </p>
                  <p>Some contents...</p>
                </Drawer>
                <Popover placement="bottom" title={this.props.user ? this.props.user.name : '游客'} content={this.props.user ? serve() : login()} trigger="click">
                  {this.props.user ?
                    <span><img style={{width: 30, borderRadius: 30}} src={this.props.user?(this.props.user.avatar?this.props.user.avatar:require('../../statics/img/log1_black.png')):require('../../statics/img/log1_black.png')} alt="图片"/></span> : (
                      <span><Icon type="login" onClick={this.showDrawer} theme="outlined"/></span>)}
                </Popover>
              </div>
            </Col>
          </Row>

        </div>
      </Affix>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current: state.get('header').get('current'),
    visible: state.get('header').get('visible'),
    isDark: state.get('header').get('isDark'),
    user: state.get('header').get('user'),
    columns:state.get('header').get('parentCloum')
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick(e) {
      dispatch(actionCreate.setMenuState(e));
    },
    showDrawer() {
      dispatch(actionCreate.openSetWindow());
    },
    onClose() {
      dispatch(actionCreate.closeSetWindow());
    },
    setBackground() {
      dispatch(actionCreate.setIsDark());
    },
    checkLogin() {
      dispatch(actionCreate.isLogin());
    },
    outLogin() {
      dispatch(actionCreate.clearUser());
    },
    getColumns(){
      dispatch(actionCreate.getMainColumn());
    },
    getTags(){
      dispatch(actionCreate.getMainTag());
    }

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);

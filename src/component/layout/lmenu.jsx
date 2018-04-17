import React, { Component, PropTypes } from 'react';
import { is, fromJS } from 'immutable';
import Config from '../../config/index';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Layout, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
/**
 * 公共菜单
 *
 * @export
 * @class Lmenu
 * @extends {Component}
 */
export class Lmenu extends Component {
	constructor(props, context) {
		super(props, context); //后才能用this获取实例化对象
		const openKeys = Config.localItem('OPENKEY') ? [Config.localItem('OPENKEY')] : [];
		this.state = {
			openKeys: openKeys
		};
	}
    onOpenChange = (openKeys) => {
	    const state = this.state;
	    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
	    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

	    let nextOpenKeys = [];
	    if (latestOpenKey) {
	      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
	    }
	    if (latestCloseKey) {
	      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
	    }
	    Config.localItem('OPENKEY', nextOpenKeys);
	    this.setState({ openKeys: nextOpenKeys });
	}
  	getAncestorKeys = (key) => {
	    const map = {
	      sub3: ['sub2'],
	    };
	    return map[key] || [];
	}
	render() {
		const defaultSelectedKey = process.env.NODE_ENV !== 'production' ? [location.pathname.split('/')[location.pathname.split('/').length - 1] || 'home'] : [location.hash.split('/')[location.hash.split('/').length - 1].split('?')[0] || 'home'];
		return (
			<Menu openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} theme="dark" mode={this.props.mode} defaultSelectedKeys={defaultSelectedKey}>
		        <Menu.Item key="home">
			        <Link to="/home">
		              <Icon type="laptop" />
		              {!this.props.collapsed && <span className="nav-text">快速入门</span>}
		            </Link>
	            </Menu.Item>
                <SubMenu key="chart" title={<span><Icon type="dot-chart" /><span className="nav-text">登记</span></span>}>
                    <Menu.Item key="queryBooking"><Link to="/booking/queryBooking">查询预订信息</Link></Menu.Item>
					<Menu.Item key="booking"><Link to="/booking/checkIn">办理入住</Link></Menu.Item>
	            </SubMenu>
                <Menu.Item key="checkout">
			        <Link to="/checkout">
		              <Icon type="user" />
		              {!this.props.collapsed && <span className="nav-text">退订/续住</span>}
		            </Link>
	            </Menu.Item>
	            <SubMenu
	              key="sub1" title={<span><Icon type="team" /><span className="nav-text">客房/客人信息</span></span>}
	            >
	              <Menu.Item key="guestroom"><Link to="/guestrp/guestroom">客房信息</Link></Menu.Item>
	              <Menu.Item key="guestpeople"><Link to="/guestrp/guestpeople">已入住客人信息</Link></Menu.Item>
	            </SubMenu>
	            <SubMenu key="sub2" title={<span><Icon type="notification" /><span className="nav-text">酒店信息管理</span></span>}>
					<Menu.Item key="hotelinfo"><Link to="/hotel/baseinfo">酒店基本信息</Link></Menu.Item>
					<Menu.Item key="roomprice"><Link to="/hotel/roomprice">客房价格</Link></Menu.Item>
					{/*<Menu.Item key="roominfo"><Link to="/hotel/roominfo"/>客房具体信息</Menu.Item>*/}
					<Menu.Item key="authorityinfo"><Link to = '/hotel/authorityinfo'>权限信息</Link></Menu.Item>
					<Menu.Item key="userinfo"><Link to = '/hotel/userinfo'>用户信息</Link></Menu.Item>
			    </SubMenu>
	        </Menu>
		)
	}
}
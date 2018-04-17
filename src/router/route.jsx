/**
* 疑惑一：
* React createClass 和 extends React.Component 有什么区别?
* 之前写法：
* let app = React.createClass({
*  	getInitialState: function(){
*    	// some thing
*  	}
*  })
* ES6写法(通过es6类的继承实现时state的初始化要在constructor中声明)：
* class exampleComponent extends React.Component {
*    constructor(props) {
*        super(props);
*        this.state = {example: 'example'}
*    }
* }
*/

import React, {Component, PropTypes} from 'react'; // react核心
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router'; // 创建route所需
import Config from '../config/index';
import layout from '../component/layout/layout'; // 布局界面

import login from '../containers/login/login'; // 登录界面

/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
	render() {
		// 这个组件是一个包裹组件，所有的路由跳转的页面都会以this.props.children的形式加载到本组件下
		return (
			<div>{this.props.children}</div>
		);
	}
}

// const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

// 快速入门
const home = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/home/homeIndex').default)
    }, 'home');
}

// 查询预订信息
const queryBooking = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/booking/queryBooking').default)
    }, 'queryBooking');
}

//办理入住
const checkIn = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/booking/checkIn').default)
    }, 'checkIn');
}


// 退订/续住
const checkOut = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/flatcheck/checkOut').default)
    }, 'checkOut');
}


// 客房信息
const guestRoom = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/guestRP/guestRoom').default)
    }, 'guestRoom');
}

// 已入住客人信息
const guestPeople = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/guestRP/guestPeople').default)
    }, 'guestPeople');
}



// 酒店基本信息
const hotelBaseInfo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/hotel/hotelBaseInfo').default)
    }, 'hotelBaseInfo');
}

// 客房价格
const roomPrice = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/hotel/roomPrice').default)
    }, 'roomPrice');
}

//客房具体信息
const roomInfo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/hotel/roomInfo').default)
    }, 'roomInfo');
}

//权限信息
const authorityInfo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/hotel/authorityInfo').default)
    }, 'authorityInfo');
}

//用户信息
const useriInfo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../containers/hotel/useriInfo').default)
    }, 'useriInfo');
}

// 登录验证
const requireAuth = (nextState, replace) => {
	// let token = (new Date()).getTime() - Config.localItem('USER_AUTHORIZATION');
	// 	replace({
	// 		pathname: '/login',
	// 		state: { nextPathname: nextState.location.pathname }
	// 	});
}

const RouteConfig = (
	<Router history={browserHistory}>
		<Route path="/home" component={layout} onEnter={requireAuth}>
			<IndexRoute getComponent={home} onEnter={requireAuth} /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
			<Route path="/home" getComponent={home} onEnter={requireAuth} />
            <Route path="/booking/queryBooking" getComponent={queryBooking} onEnter={requireAuth} />
            <Route path="/booking/checkIn" getComponent={checkIn} onEnter={requireAuth} />
            <Route path="/checkout" getComponent={checkOut} onEnter={requireAuth} />
			<Route path="/guestrp/guestroom" getComponent={guestRoom} onEnter={requireAuth} />
			<Route path="/guestrp/guestpeople" getComponent={guestPeople} onEnter={requireAuth} />
			<Route path="/hotel/baseinfo" getComponent={hotelBaseInfo} onEnter={requireAuth} />
			<Route path="/hotel/roomprice" getComponent={roomPrice} onEnter={requireAuth} />
			<Route path="/hotel/roominfo" getComponent={roomInfo} onEnter={requireAuth} />
			<Route path="/hotel/authorityinfo" getComponent={authorityInfo} onEnter={requireAuth} />
			<Route path="/hotel/userinfo" getComponent={useriInfo} onEnter={requireAuth} />
		</Route>
		<Route path="/login" component={Roots}> // 所有的访问，都跳转到Roots
			<IndexRoute component={login} /> // 默认加载的组件，比如访问www.test.com,会自动跳转到www.test.com/home
		</Route>
		<Redirect from="*" to="/home" />
	</Router>
);
export default RouteConfig;

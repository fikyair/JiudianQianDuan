import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import Config from '../../config/index';

// 公共面包屑
import { Bcrumb } from '../../component/bcrumb/bcrumb';

import styles from './style/user.less';

/* 以类的方式创建一个组件 */
class checkOut extends Component {
    constructor(props) {
    	super(props);
        this.state = {
            loading: false,
            userInfo: []
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		return (
		<div className="user-container">
            <Bcrumb title="退订/续住" icon="user" />
			退订/续住
		</div>
		);
	}
}

checkOut.contextTypes = {
};

export default checkOut;


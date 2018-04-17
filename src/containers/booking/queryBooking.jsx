import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { Row, Col, Card } from 'antd';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';

// 公共面包屑
import { Bcrumb } from '../../component/bcrumb/bcrumb';

// 引入折线图

/* 以类的方式创建一个组件 */
class queryBooking extends Component {
    constructor(props) {
    	super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
		return (
            <div className="lines-container">
                <Bcrumb title="查询预订信息" icon="line-chart" />
            </div>
		);
	}
}

export default queryBooking;

import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import { Bcrumb } from '../../component/bcrumb/bcrumb';

/* 以类的方式创建一个组件 */
class useriInfo extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    render() {
        return (
            <div>
                <Bcrumb title="用户信息" icon="notification" />
                用户信息
            </div>
        );
    }
}

useriInfo.contextTypes = {
};

export default useriInfo;
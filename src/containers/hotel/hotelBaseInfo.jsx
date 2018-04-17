import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { Row, Col,Modal, DatePicker, Select, Form, Card, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
const FormItem = Form.Item;
import moment from 'moment';
const Option = Select.Option;
// 公共面包屑
import { Bcrumb } from '../../component/bcrumb/bcrumb';
import ManagerBody from "../../component/ManagerBody";
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';


/* 以类的方式创建一个组件 */
@Form.create()
class hotelBaseInfo extends Component {
    constructor(props) {
    	super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
	render() {
        const {getFieldDecorator} = this.props.form;

        return (
		<div>
			<Bcrumb title="酒店基本信息" icon="notification" />
			酒店基本信息
			<Card title = {"酒店基本信息"}>
				<Row>
					<Col span = {24} >
						<FormItem
							label="地址"
						>
                            {getFieldDecorator('x', {
                                initialValue: '天津市西青区姚村公寓3单元201室',
                                rules: [{
                                    required: true, message: '请输入地址',
                                }],
                            })(
								<Input style = {{ width: 180 }}/>
                            )}

						</FormItem>
					</Col>
					<Col span={24}>
						<FormItem
							label="前台电话"
						>
                            {getFieldDecorator('x', {
                                initialValue: '13521024523',
                                rules: [{
                                    required: true, message: '请输入电话',
                                }],
                            })(
								<Input style = {{ width: 180 }}/>
                            )}

						</FormItem>
					</Col>
					<Col span = {24} >
						<FormItem >
							<Button type="primary" htmlType="submit" onClick={() => {
                                this.submit()
                            }}>修改</Button>
						</FormItem>
					</Col>
				</Row>


			</Card>
		</div>
		);
	}
}

hotelBaseInfo.contextTypes = {
};

export default hotelBaseInfo;
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
class guestPeople extends Component {
    state = {
        pageNum: 1,
        pageSize: 10,
        total: 1,
        visible: false,
    }
    handleChange = (value)=> {
        console.log(`selected ${value}`);
    }

    mockData = [{
        name: 'SKFDSJS',
        remark: '小红',
        phone: '16岁',
        type: '女',
        enterDate: '15220909732',
		num: 'ERSJS790',
    },{
        name: 'FNNSK521',
        remark: '大熊',
        phone: '26岁',
        type: '男',
        enterDate: '15220909732',
        num: 'JJJAIHHS66',
    },{
        name: 'KSHSLAA021',
        remark: '张倩',
        phone: '21岁',
        type: '女',
        enterDate: '15220909732',
        num: 'JSKHNZ203',
    }]
    columns = [{
        title: '房间号',
        dataIndex: 'name',
        key: 'name',
        width: '10%',
    }, {
        title: '姓名',
        dataIndex: 'remark',
        key: 'remark',
        width: '10%',
    },  {
        title: '年龄',
        dataIndex: 'phone',
        key: 'phone',
        width: '10%',
    }, {
        title: '性别',
        dataIndex: 'type',
        key: 'type',
        width: '10%',
    },{
        title: '电话',
        dataIndex: 'enterDate',
        key: 'enterDate',
        width: '10%',
    },{
        title: '订单号',
        dataIndex: 'num',
        key: 'num',
        width: '10%',
    }];
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {span: 12},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 12},
                sm: {span: 14},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };
        return (
			<div className="lines-container">
				<Bcrumb title="已入住客人信息" icon="user" />
				已入住客人信息
				<Form style={{ marginTop:70 }}>
					<Row>
						<Col span = {8} >
							<FormItem
                                {...formItemLayout}
								label="房间号"
								hasFeedback
							>
                                {getFieldDecorator('x', {
                                    initialValue: '',
                                    rules: [{
                                        required: true, message: 'aa!',
                                    }],
                                })(
									<Input style = {{ width: 180 }}/>
                                )}

							</FormItem>
						</Col>
						<Col span = {8} >
							<FormItem {...tailFormItemLayout}>
								<Button type="primary" htmlType="submit" onClick={() => {
                                    this.submit()
                                }}>查询</Button>
							</FormItem>
						</Col>
					</Row>
				</Form>
				<ManagerBody
					title={ <span style={{fontSize: 13, fontWeight: 400}}> 预订信息 </span> }
					pageNum={ this.state.pageNum }
					pageSize={this.state.pageSize }
					total={ this.state.total }
					columns={ this.columns }
					dataSource={ this.mockData }
				/>
			</div>
        );
    }
}

guestPeople.contextTypes = {
};

export default guestPeople;

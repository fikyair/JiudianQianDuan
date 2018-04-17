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
class authorityInfo extends Component {
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
        name: '小强',
        remark: '23',
        phone: '男',
        type: '1325485621',
        enterDate: 'adbce_9815',
        pwd: '123456'
    },{
        name: '小强',
        remark: '23',
        phone: '男',
        type: '1325485621',
        enterDate: 'adbce_9815',
        pwd: '123456'
    },{
        name: '小强',
        remark: '23',
        phone: '男',
        type: '1325485621',
        enterDate: 'adbce_9815',
        pwd: '123456'
    },{
        name: '小强',
        remark: '23',
        phone: '男',
        type: '1325485621',
        enterDate: 'adbce_9815',
        pwd: '123456'
    }]
    columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: '10%',
    }, {
        title: '年龄',
        dataIndex: 'remark',
        key: 'remark',
        width: '10%',
    },  {
        title: '性别',
        dataIndex: 'phone',
        key: 'phone',
        width: '10%',
    }, {
        title: '电话',
        dataIndex: 'type',
        key: 'type',
        width: '10%',
    },{
        title: '用户名',
        dataIndex: 'enterDate',
        key: 'enterDate',
        width: '10%',
    },{
        title: '密码',
        dataIndex: 'pwd',
        key: 'pwd',
        width: '10%',
    },{
        title: '操作',
        key: 'action',
        width: '25%',
        render: (text, record) => (
            <span>
              <a >修改</a>
                 <span className="ant-divider"/>
                <a onClick={this.showModal}>删除</a>
            </span>
        )
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
                <Bcrumb title="权限信息" icon="user" />
                权限信息
                <ManagerBody
                    title={ <span style={{fontSize: 13, fontWeight: 400}}> 权限信息 </span> }
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

authorityInfo.contextTypes = {
};

export default authorityInfo;
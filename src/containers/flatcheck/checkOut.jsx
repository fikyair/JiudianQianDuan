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
class checkOut extends Component {
    state = {
        pageNum: 1,
        pageSize: 10,
        total: 1,
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleChange = (value)=> {
        console.log(`selected ${value}`);
    }

    mockData = [{
        name: 'FNNSK521',
        remark: '3012',
        phone: '李想',
        type: '标准间',
        enterDate: '2018-05-12',
        moveDate: '100元',
        day: '2018-06-13',
        danjia: '256元',
        zongjia : '354元',
        yajin:'100元'
    },{
        name: 'FNNSK521',
        remark: '3012',
        phone: '李想',
        type: '标准间',
        enterDate: '2018-05-12',
        moveDate: '100元',
        day: '2018-06-13',
        danjia: '256元',
        zongjia : '354元',
        yajin:'100元'
    },{
        name: 'FNNSK521',
        remark: '3012',
        phone: '李想',
        type: '标准间',
        enterDate: '2018-05-12',
        moveDate: '100元',
        day: '2018-06-13',
        danjia: '256元',
        zongjia : '354元',
        yajin:'100元'
    },{
        name: 'FNNSK521',
        remark: '3012',
        phone: '李想',
        type: '标准间',
        enterDate: '2018-05-12',
        moveDate: '100元',
        day: '2018-06-13',
        danjia: '256元',
        zongjia : '354元',
        yajin:'100元'
    }]
    columns = [{
        title: '订单号',
        dataIndex: 'name',
        key: 'name',
        width: '10%',
    }, {
        title: '房间号',
        dataIndex: 'remark',
        key: 'remark',
        width: '10%',
    },  {
        title: '姓名',
        dataIndex: 'phone',
        key: 'phone',
        width: '10%',
    }, {
        title: '房型',
        dataIndex: 'type',
        key: 'type',
        width: '10%',
    },{
        title: '入住日期',
        dataIndex: 'enterDate',
        key: 'enterDate',
        width: '10%',
    },{
        title: '离店日期',
        dataIndex: 'day',
        key: 'day',
        width: '10%',
    },{
        title: '押金',
        dataIndex: 'moveDate',
        key: 'moveDate',
        width: '10%',
    }, {
        title: '单价',
        dataIndex: 'danjia',
        key: 'danjia',
        width: '10%',
    }, {
        title: '操作',
        key: 'action',
        width: '25%',
        render: (text, record) => (
            <span>
              <a >退房</a>
                 <span className="ant-divider"/>
                <a onClick={this.showModal}>续住</a>
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
                <Bcrumb title="退订/续住" icon="user" />
                退订/续住
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
                <Modal
                    title="续住"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Row>
                        <Col span={24} >
                            <FormItem
                                {...formItemLayout}
                                label="订单号"
                                hasFeedback
                            >
                                {getFieldDecorator('mainPartCode', {
                                    initialValue: '',
                                })(
                                    <Input style = {{ width : 140}}/>
                                )}

                            </FormItem>
                        </Col>
                        <Col span={24} >
                            <FormItem
                                {...formItemLayout}
                                label="房间号"
                                hasFeedback
                            >
                                {getFieldDecorator('3', {
                                    initialValue: '',
                                })(
                                    <Input style = {{ width : 140}}/>
                                )}

                            </FormItem>
                        </Col>
                        <Col span={24} >
                            <FormItem
                                {...formItemLayout}
                                label="天数"
                                hasFeedback
                            >
                                {getFieldDecorator('2', {
                                    initialValue: '',
                                })(
                                    <Input style = {{ width : 140}}/>
                                )}

                            </FormItem>
                        </Col>
                        <Col span={24} >
                            <FormItem
                                {...formItemLayout}
                                label="单价"
                                hasFeedback
                            >
                                {getFieldDecorator('2', {
                                    initialValue: '',
                                })(
                                    <Input style = {{ width : 140}}/>
                                )}

                            </FormItem>
                        </Col>
                        <Col span={24} >
                            <FormItem
                                {...formItemLayout}
                                label="应收款"
                                hasFeedback
                            >
                                {getFieldDecorator('2', {
                                    initialValue: '',
                                })(
                                    <Input style = {{ width : 140}}/>
                                )}

                            </FormItem>
                        </Col>
                    </Row>


                </Modal>
            </div>
        );
    }
}

checkOut.contextTypes = {
};

export default checkOut;


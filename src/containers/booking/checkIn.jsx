import React, { Component, PropTypes } from 'react'; // 引入了React和PropTypes
import { Row, Col,Modal, DatePicker, Select, Form, Card, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { is, fromJS} from 'immutable';
import moment from 'moment';
import './style/a.less';
const FormItem = Form.Item;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
// 公共面包屑
import { Bcrumb } from '../../component/bcrumb/bcrumb';

/* 以类的方式创建一个组件 */
@Form.create()
class CheckIn extends Component {
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
                <Bcrumb title="办理入住" icon="line-chart" />
                办理入住
                <Form style={{ marginTop:70 }}>
                    <Row>
                        <Col span = {8} >
                            <FormItem
                                {...formItemLayout}
                                label="入住日期"
                                hasFeedback
                            >
                                {getFieldDecorator('mainPartCode', {
                                    initialValue: '',
                                    rules: [{
                                        required: true, message: '请输入主体编码!',
                                    }],
                                })(
                                    <DatePicker defaultValue={moment('2018/01/30', dateFormat)} format={dateFormat} />
                                )}

                            </FormItem>
                        </Col>
                        <Col span = {8} >
                            <FormItem
                                {...formItemLayout}
                                label="离店日期"
                                hasFeedback
                            >
                                {getFieldDecorator('mainPartCode', {
                                    rules: [{
                                        required: true, message: '请输入主体编码!',
                                    }],
                                })(
                                    <DatePicker defaultValue={moment('2018/02/01', dateFormat)} format={dateFormat} />
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
                        <Col span = {8} >
                            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src="http://aijia-flat-sh-1253646934.picsh.myqcloud.com/v800x600_ChAFD1qjq2iAJzjVAAJBuhFRSeI953.JPG" />
                                </div>
                                <div className="custom-card">
                                    <h3>标准双床房:</h3>
                                    <span style = {{ display: 'inline-flex'}}><h3>剩余量:</h3><p>&nbsp;&nbsp;&nbsp;5间</p></span><br/>
                                    <div style = {{ display: 'inline-flex'}}><h3>折后价:</h3><p>&nbsp;&nbsp;&nbsp;124元</p></div>
                                    <Button onClick={this.showModal} style = {{ marginLeft : 140}}>入住</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col span = {8} >
                            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src="http://aijia-flat-sh-1253646934.picsh.myqcloud.com/v800x600_ChAFfVq31fiAVCVxAAJj8V2UIWs143.jpg" />
                                </div>
                                <div className="custom-card">
                                    <h3>标准大床房:</h3>
                                    <span style = {{ display: 'inline-flex'}}><h3>剩余量:</h3><p>&nbsp;&nbsp;&nbsp;2间</p></span><br/>
                                    <div style = {{ display: 'inline-flex'}}><h3>折后价:</h3><p>&nbsp;&nbsp;&nbsp;253元</p></div>
                                    <Button onClick={this.showModal} style = {{ marginLeft : 140}}>入住</Button>
                                </div>
                            </Card>
                        </Col>
                        <Col span = {8} >
                            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                                <div className="custom-image">
                                    <img alt="example" width="100%" src="http://aijia-flat-sh-1253646934.picsh.myqcloud.com/v800x600_ChAFD1p-3POAAMtZABlMRCgvGoo134.JPG" />
                                </div>
                                <div className="custom-card">
                                    <h3>标准双床房</h3>
                                    <span style = {{ display: 'inline-flex'}}><h3>剩余量:</h3><p>&nbsp;&nbsp;&nbsp;1间</p></span><br/>
                                    <div style = {{ display: 'inline-flex'}}><h3>折后价:</h3><p>&nbsp;&nbsp;&nbsp;212元</p></div>
                                    <Button onClick={this.showModal} style = {{ marginLeft : 140}}>入住</Button>
                                </div>
                            </Card>
                        </Col>

                    </Row>
                </Form>
                <Modal
                    title="房间类型"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Row>
                        <Col span={24} >
                            <FormItem
                                {...formItemLayout}
                                label="折扣价格"
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
                                label="房间类型"
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
                                label="可用房间"
                            >
                                {getFieldDecorator('1', {
                                    initialValue: [],
                                })(
                                    <Select style={{ width: 120 }} placeholder = "请选择" onChange={this.handleChange}>
                                        <Option value="房间一">房间一</Option>
                                        <Option value="房间二">房间二</Option>
                                        <Option value="房间三">房间三</Option>
                                    </Select>
                                )}

                            </FormItem>
                        </Col>
                        <Col span={24} >
                            <FormItem
                                {...formItemLayout}
                                label="房费"
                                hasFeedback
                            >
                                {getFieldDecorator('2', {
                                    initialValue: '',
                                })(
                                    <div></div>
                                )}

                            </FormItem>
                        </Col><Col span={24} >
                        <FormItem
                            {...formItemLayout}
                            label="押金"
                            hasFeedback
                        >
                            {getFieldDecorator('2', {
                                initialValue: '',
                            })(
                                <div></div>
                            )}

                        </FormItem>
                        <Col span={24} >
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
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
                                label="电话"
                                hasFeedback
                            >
                                {getFieldDecorator('mainPartCode', {
                                    initialValue: '',
                                })(
                                    <Input style = {{ width : 140}}/>
                                )}

                            </FormItem>
                        </Col>
                    </Col>

                    </Row>


                </Modal>
            </div>
        );
    }
}

export default CheckIn;

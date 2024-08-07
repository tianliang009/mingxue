import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button, Modal, RadioGroup, Radio } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh, IconPlus } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
const ModelManagement = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '待定' },
        { value: '2', label: '启用' },
        { value: '3', label: '停用' },
    ];
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '模型名称',
            dataIndex: 'callModel',
            width: 200
        }, {
            title: 'AI助手名称',
            dataIndex: 'assistantName',
            width: 120
        }, {
            title: '所属厂家',
            dataIndex: 'companyName',
        }, {
            title: '赠送调用量(千/tokens)',
            dataIndex: 'giveBalanceToken',
        }, {
            title: '赠送金额(元)',
            dataIndex: 'giveNum',
        }, {
            title: '输入计费规则(元/千tokens)',
            dataIndex: 'inputToken'
        }, {
            title: '输出计费规则(元/千tokens)',
            dataIndex: 'outputToken'
        }, {
            title: '模型状态',
            dataIndex: 'status'
        }, {
            title: '操作',
            width: 200,
            render: (item) => {
                return <div className='tabOpe'>
                    <p onClick={() => editOpe(item)}>详情</p>
                    <p>编辑</p>
                    <p>删除</p>
                </div>;
            }
        }
    ];
    const editOpe = (index) => {
        console.log(index)
        setVisible2(true)
    }
    const pagination = useMemo(
        () => ({
            pageSize: 6,
        }),
        []
    );
    const searchOpe = () => {
        console.log('search')
    }
    const resertOpe = () => {
        console.log('resert')
    }
    const setTime = (e) => {
        let time = timestampConversion(e);
        console.log(time)
    }
    const handleOk = () => {
        setVisible(false);
        console.log('Ok button clicked');
    };
    const handleOk2 = () => {
        setVisible2(false);
        console.log('Ok button clicked');
    };
    const handleCancel = () => {
        setVisible(false);
        console.log('Cancel button clicked');
    };
    const handleCancel2 = () => {
        setVisible2(false);
        console.log('Cancel button clicked');
    };
    const handleAfterClose = () => {
        console.log('After Close callback executed');
    };
    const handleAfterClose2 = () => {
        console.log('After Close callback executed');
    };
    const changeRadio = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <>
            <Modal
                title="新增"
                visible={visible}
                onOk={handleOk}
                afterClose={handleAfterClose} //>=1.16.0
                onCancel={handleCancel}
                closeOnEsc={true}
                okText={'保存'}
                width={800}
            >
                <div className='modal_box'>
                    <div className='modal_row'>
                        <div>模型名称：</div>
                        <div>
                            <Input placeholder={'请输入模型名称'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>AI助手名称：</div>
                        <div>
                            <Input placeholder={'请输入Ai助手名称'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>所属单位：</div>
                        <div>
                            <Input placeholder={'请输入所属单位'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>赠送调用量（千/tokens）：</div>
                        <div>
                            <Input placeholder={'请输入赠送调用量（千/tokens）'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>赠送金额（元）：</div>
                        <div>
                            <Input placeholder={'请输入赠送金额（元）'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>输入计费规则（元/千tokens）：</div>
                        <div>
                            <Input placeholder={'请输入计费规则（元/千tokens）'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>输出计费规则（元/千tokens）：</div>
                        <div>
                            <Input placeholder={'请输入输出计费规则（元/千tokens）'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>生效日期：</div>
                        <div style={{ justifyContent: 'space-between' }}>
                            <RadioGroup onChange={changeRadio} value={value} aria-label="" name="demo-radio-group">
                                <Radio value={1}>启用</Radio>
                                <Radio value={2}>停用</Radio>
                                <Radio value={3}>待定</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                title="查看"
                visible={visible2}
                onOk={handleOk2}
                afterClose={handleAfterClose2} //>=1.16.0
                onCancel={handleCancel2}
                closeOnEsc={true}
                width={800}
                footer={
                    <Button type="primary">
                        关闭
                    </Button>
                }
            >
                <div className='modal_box'>
                    <div className='modal_row'>
                        <div>模型名称：</div>
                        <div>AGI Sky-Chat-3.0 API</div>
                    </div>
                    <div className='modal_row'>
                        <div>AI助手名称：</div>
                        <div>天工AI</div>
                    </div>
                    <div className='modal_row'>
                        <div>所属单位：</div>
                        <div>昆仑万维</div>
                    </div>
                    <div className='modal_row'>
                        <div>赠送调用量（千/tokens）：</div>
                        <div>0</div>
                    </div>
                    <div className='modal_row'>
                        <div>赠送金额（元）：</div>
                        <div>15</div>
                    </div>
                    <div className='modal_row'>
                        <div>输入计费规则（元/千tokens）：</div>
                        <div>0.010</div>
                    </div>
                    <div className='modal_row'>
                        <div>输出计费规则（元/千tokens）：</div>
                        <div>0.010</div>
                    </div>
                    <div className='modal_row'>
                        <div>模型状态：</div>
                        <div>启用</div>
                    </div>
                    <div className='modal_row'>
                        <div>创建人：</div>
                        <div>孙宇</div>
                    </div>
                    <div className='modal_row'>
                        <div>创建时间：</div>
                        <div>2024.06.18 18:02:01</div>
                    </div>
                </div>
            </Modal>

            <Card style={{marginBottom: '12px'}} className='search_box'>
                <div className='search_chi'>
                    <Input placeholder="请输入模型名称" prefix="模型名称" showClear></Input>
                    <Input placeholder="请输入AI助手名称" prefix="AI助手名称" showClear></Input>
                    <Select optionList={typeList} insetLabel="模型状态" defaultValue={'0'}></Select>
                </div>
                <div className='' style={{display:'flex',justifyContent: 'end'}}>
                    <Button theme='solid' type='primary' style={{ marginRight: 8 }} onClick={searchOpe}>
                        <IconSearch />
                        搜索
                    </Button>
                    <Button theme='solid' type='tertiary' onClick={resertOpe}>
                        <IconRefresh />
                        重置
                    </Button>
                </div>
            </Card>
            <Button theme='solid' type='primary' style={{ float:'left', marginBottom: '12px' }} onClick={()=>{setVisible(true)}}>
                <IconPlus />
                新增
            </Button>
            <Table id='tabeller' columns={columns} dataSource={tableData} pagination={pagination} />  
        </>
    );
};

export default ModelManagement;
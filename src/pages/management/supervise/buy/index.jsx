import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button, Modal, RadioGroup, Radio } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh, IconPlus } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
const Buy = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(false);
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '长期' },
        { value: '2', label: '自定义' },
    ];
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '模型名称',
            dataIndex: 'callModel',
        }, {
            title: 'AI助手名称',
            dataIndex: 'assistantName'
        }, {
            title: '充值时间',
            dataIndex: 'date',
            width: 140
        }, {
            title: '充值金额（元）',
            dataIndex: 'accumulate',
        }, {
            title: '实际付款金额（元）',
            dataIndex: 'consumptionAmount',
        }, {
            title: '充值人',
            dataIndex: 'name',
        }, {
            title: '有效期',
            dataIndex: 'periodValidity',
        }, {
            title: '操作',
            width: 140,
            render: () => {
                return <div className='tabOpe'>
                    <p>编辑</p>
                    <p>删除</p>
                </div>;
            }
        }
    ];
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
    const handleCancel = () => {
        setVisible(false);
        console.log('Cancel button clicked');
    };
    const handleAfterClose = () => {
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
                            <Select optionList={typeList} defaultValue={'0'} style={{width:'100%'}}></Select>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>AI助手名称：</div>
                        <div>
                            <span>squirtle</span>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>充值时间：</div>
                        <div>
                            <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="充值时间" />
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>充值金额(元)：</div>
                        <div>
                            <Input placeholder={'充值金额'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>实际付款金额(元)：</div>
                        <div>
                            <Input placeholder={'实际付款金额'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>充值人：</div>
                        <div>
                            <Input placeholder={'充值人：'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>有效期：</div>
                        <div style={{ justifyContent: 'space-between' }}>
                            <RadioGroup onChange={changeRadio} value={value} aria-label="单选组合示例" name="demo-radio-group">
                                <Radio value={1}>长期</Radio>
                                <Radio value={2}>自定义</Radio>
                            </RadioGroup>
                            <DatePicker style={{display: value===2 ? 'block':'none'}} insetLabel="自定义时间"/>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>维护人：</div>
                        <div>
                            <span>乌龙茶</span>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>维护时间：</div>
                        <div>
                            <span>2024/07/16-10:13:43</span>
                        </div>
                    </div>
                </div>
            </Modal>

            <Card style={{marginBottom: '12px'}} className='search_box'>
                <div className='search_chi'>
                    <Input prefix="模型名称" placeholder="请输入模型名称" showClear></Input>
                    <Input prefix="AI助手名称" placeholder="请输入AI助手名称" showClear></Input>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="充值时间" />
                </div>
                <div className='search_chi'>
                    <Input prefix="充值人" placeholder="请输入充值人" showClear></Input>
                    <Select optionList={typeList} insetLabel="有效期类型" defaultValue={'0'}></Select>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="有效期" />
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

export default Buy;
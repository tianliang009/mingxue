import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button, Modal, RadioGroup, Radio } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh, IconPlus } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
const SetCommission = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(false);
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '1-100' },
        { value: '2', label: '101-200' },
        { value: '3', label: '201-300' },
        { value: '4', label: '301-500' },
        { value: '5', label: '501-1000' },
        { value: '6', label: '1000以上' },
    ];
    const listFir = [
        { value: '0', label: '全部' },
        { value: '1', label: '注册' },
    ]
    const listSec = [
        { value: '0', label: '全部' },
        { value: '1', label: '一个月' },
        { value: '2', label: '一季度' },
        { value: '3', label: '一年' },
        { value: '4', label: '长期' },
    ]
    const listThi = [
        { value: '0', label: '全部' },
        { value: '1', label: '未生效' },
        { value: '2', label: '已生效' },
        { value: '3', label: '停用' },
    ]
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '创建时间',
            dataIndex: 'date',
            width: 140
        }, {
            title: '创建人',
            dataIndex: 'name',
        }, {
            title: '邀请人数',
            render: () => {
                return <div>
                    0-100人
                </div>
            }
        }, {
            title: '返现灵感值',
            dataIndex: 'voucherNum'
        }, {
            title: '生效日期',
            render: () => {
                return <div>
                    2024.06.25 00:00:00
                </div>
            }
        }, {
            title: '状态',
            dataIndex: 'voucherStatus',
        }, {
            title: '操作',
            width: 200,
            render: (item) => {
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
                        <div>邀请人数（人）：</div>
                        <div>
                            <Select optionList={typeList} defaultValue={'0'} style={{width:'100%'}}></Select>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>返现灵感值：</div>
                        <div>
                            <Input placeholder={'请输入灵感值'} showClear></Input>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>生效日期：</div>
                        <div style={{ justifyContent: 'space-between' }}>
                            <RadioGroup onChange={changeRadio} value={value} aria-label="" name="demo-radio-group">
                                <Radio value={1}>保存生效</Radio>
                                <Radio value={2}>自定义</Radio>
                            </RadioGroup>
                            <DatePicker style={{display: value===2 ? 'block':'none'}} insetLabel="自定义时间"/>
                        </div>
                    </div>
                </div>
            </Modal>

            <Card style={{marginBottom: '12px'}} className='search_box'>
                <div className='search_chi'>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="创建时间" />
                    <Input placeholder="请输入创建人" prefix="创建人" showClear></Input>
                    <Select optionList={listFir} insetLabel="邀请人数" defaultValue={'0'}></Select>
                </div>
                <div className='search_chi'>
                    <Select optionList={listSec} insetLabel="生效日期" defaultValue={'0'}></Select>
                    <Select optionList={listThi} insetLabel="状态" defaultValue={'0'}></Select>
                    <div style={{border:0,display:'flex',justifyContent: 'end'}}>
                        <Button theme='solid' type='primary' style={{ marginRight: 8 }} onClick={searchOpe}>
                            <IconSearch />
                            搜索
                        </Button>
                        <Button theme='solid' type='tertiary' onClick={resertOpe}>
                            <IconRefresh />
                            重置
                        </Button>
                    </div>
                </div>
                <div className='' style={{display:'flex',justifyContent: 'end'}}>
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

export default SetCommission;
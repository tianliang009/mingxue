import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button, Modal, RadioGroup, Radio } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh, IconPlus } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
import { render } from 'less';
const SetInspiration = () => {
    const [value, setValue] = useState(1);
    const [value2, setValue2] = useState(1);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '一个月' },
        { value: '2', label: '一季度' },
        { value: '3', label: '一年' },
        { value: '4', label: '长期' },
    ]
    const listFir = [
        { value: '0', label: '全部' },
        { value: '1', label: '15秒广告' },
        { value: '2', label: '30秒广告' },
        { value: '3', label: '60秒广告' },
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
            title: '广告类型',
            render: () => {
                return <div>
                    15秒广告
                </div>
            }
        }, {
            title: '赠送灵感值',
            dataIndex: 'voucherNum'
        }, {
            title: '有效期',
            render: () => {
                return <div>
                    一年
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
    const changeRadio2 = (e) => {
        console.log('radio checked', e.target.value);
        setValue2(e.target.value);
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
                        <div>广告类型：</div>
                        <div style={{ justifyContent: 'space-between' }}>
                            <RadioGroup onChange={changeRadio2} value={value2} aria-label="" name="demo-radio-group">
                                <Radio value={1}>15秒广告</Radio>
                                <Radio value={2}>30秒广告</Radio>
                                <Radio value={3}>60秒广告</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className='modal_row'>
                        <div>赠送灵感值：</div>
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
                    <div className='modal_row'>
                        <div>有效期：</div>
                        <div>
                            <Select optionList={typeList} defaultValue={'0'} style={{width:'100%'}}></Select>
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
                        <div>赠送形式：</div>
                        <div>注册</div>
                    </div>
                    <div className='modal_row'>
                        <div>生效日期：</div>
                        <div>2024.06.18  20:00:00</div>
                    </div>
                    <div className='modal_row'>
                        <div>有效期至：</div>
                        <div>长期</div>
                    </div>
                    <div className='modal_row'>
                        <div>创建人：</div>
                        <div>刘文秀</div>
                    </div>
                    <div className='modal_row'>
                        <div>创建时间：</div>
                        <div>2024.06.18  18:00:00</div>
                    </div>
                    <div className='modal_row'>
                        <div>状态：</div>
                        <div>已启用</div>
                    </div>
                    <div className='modal_row'>
                        <div>停用人：</div>
                        <div>刘文秀</div>
                    </div>
                    <div className='modal_row'>
                        <div>停用时间：</div>
                        <div>2024.06.18  18:00:00</div>
                    </div>
                </div>
            </Modal>

            <Card style={{marginBottom: '12px'}} className='search_box'>
                <div className='search_chi'>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="创建时间" />
                    <Input placeholder="请输入创建人" prefix="创建人" showClear></Input>
                    <Select optionList={listFir} insetLabel="广告类型" defaultValue={'0'}></Select>
                </div>
                <div className='search_chi'>
                    <Select optionList={listSec} insetLabel="有效期" defaultValue={'0'}></Select>
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
            </Card>
            <Button theme='solid' type='primary' style={{ float:'left', marginBottom: '12px' }} onClick={()=>{setVisible(true)}}>
                <IconPlus />
                新增
            </Button>
            <Table id='tabeller' columns={columns} dataSource={tableData} pagination={pagination} />  
        </>
    );
};

export default SetInspiration;
import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../utils/time';
import tableData from '../../../utils/temporary';
const Advertisement = () => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '成功' },
        { value: '2', label: '失败' },
    ];
    const payStatusList = [
        { value: '0', label: '全部' },
        { value: '1', label: '有效' },
        { value: '2', label: '失效' },
    ]
    const resultList = [
        { value: '0', label: '全部' },
        { value: '1', label: '成功' },
        { value: '2', label: '失败' },
    ]
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '账号',
            dataIndex: 'account',
        }, {
            title: '赠送时间',
            dataIndex: 'date',
            width: 140
        }, {
            title: '广告类型',
            render: () => {
                return <div>
                    30秒广告
                </div>
            }
        }, {
            title: '赠送灵感值',
            dataIndex: 'voucherNum',
        }, {
            title: '赠送结果',
            dataIndex: 'payResult',
        }, {
            title: '有效期',
            render: () => {
                return <div>
                    2025.06.18 12:00:12
                </div>
            }
        }, {
            title: '当前状态',
            render: () => {
                return <div>
                    有效
                </div>
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
    const setValue = (e) => {
        console.log(e)
    }
    return (
        <>
            <Card style={{marginBottom: '24px'}} className='search_box'>
                <div className='search_chi'>
                    <Input prefix="姓名" placeholder="请输入姓名" value={name} onChange={(e) => {setName(e)}} showClear></Input>
                    <Input prefix="账号" placeholder="请输入账号" value={account} onChange={(e) => {setAccount(e)}} showClear></Input>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="赠送时间" />
                </div>
                <div className='search_chi'>
                    <Select onChange={(e) => setValue(e)} optionList={typeList} insetLabel="广告类型" defaultValue={'0'}></Select>
                    <Select optionList={resultList} insetLabel="赠送结果" defaultValue={'0'}></Select>
                    <Select optionList={payStatusList} insetLabel="当前状态" defaultValue={'0'}></Select>
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
            <Table id='tabeller' columns={columns} dataSource={tableData} pagination={pagination} />  
        </>
    );
};

export default Advertisement;
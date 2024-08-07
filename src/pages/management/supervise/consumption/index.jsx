import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
const Consumption = () => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const costList = [
        { value: '0', label: '全部' },
        { value: '1', label: '无费用' },
        { value: '2', label: '费用预警' },
        { value: '3', label: '费用正常' },
    ];
    const columns = [
        {
            title: '预警',
            dataIndex: 'num',
            width: 60,
            fixed: true,
            render: () => {
                return <div className='circle_red' />
            }
        }, {
            title: '模型名称',
            dataIndex: 'callModel',
            fixed: true,
            width: 200,
        }, {
            title: 'AI助手名称',
            dataIndex: 'assistantName',
            width: 120,
        }, {
            title: '总消耗量（k/tokens）',
            dataIndex: 'sumConsumeToken',
            width: 180,
        }, {
            title: '输入（k/tokens）',
            dataIndex: 'inputToken',
            width: 180,
        }, {
            title: '输出（k/tokens）',
            dataIndex: 'outputToken',
            width: 180,
        }, {
            title: '赠送调用量（k/tokens）',
            dataIndex: 'giveToken',
            width: 200,
        }, {
            title: '赠送剩余（k/tokens）',
            dataIndex: 'giveBalanceToken',
            width: 180,
        }, {
            title: '赠送金额（元）',
            dataIndex: 'giveNum',
            width: 180,
        }, {
            title: '赠送金额剩余（元）',
            dataIndex: 'balance',
        }, {
            title: '总充值金额（元）',
            dataIndex: 'invoice',
        }, {
            title: '总付费金额（元）',
            dataIndex: 'realityNumL',
        }, {
            title: '总剩余金额（元）',
            dataIndex: 'voucherNum',
        },
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
                    <Input prefix="模型名称" placeholder="请输入模型名称" value={account} onChange={(e) => {setAccount(e)}} showClear></Input>
                    <Input prefix="AI助手名称" placeholder="请输入AI助手名称" value={name} onChange={(e) => {setName(e)}} showClear></Input>
                    <Select onChange={(e) => setValue(e)} optionList={costList} insetLabel="费用情况" defaultValue={'0'}></Select>
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
            <Table scroll={{ x: 2000 }} id='tabeller' columns={columns} dataSource={tableData} pagination={pagination} />  
        </>
    );
};

export default Consumption;
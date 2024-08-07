import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
const RechargeRecord = () => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '个人' },
        { value: '2', label: '企业' },
    ];
    const payStatusList = [
        { value: '0', label: '全部' },
        { value: '1', label: '已支付' },
        { value: '2', label: '待支付' },
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
            title: '充值时间',
            dataIndex: 'date',
            width: 140
        }, {
            title: '企业/个人名称',
            dataIndex: 'companyName',
        }, {
            title: '账号',
            dataIndex: 'account',
        }, {
            title: '所属类型',
            dataIndex: 'affiliation',
        }, {
            title: '充值金额(元)',
            dataIndex: 'accumulate',
        }, {
            title: '充值类型',
            dataIndex: 'accumulateType',
        }, {
            title: '支付方式',
            dataIndex: 'payWay',
        }, {
            title: '支付状态',
            dataIndex: 'payStatus',
        }, {
            title: '支付结果',
            dataIndex: 'payResult',
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
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="充值时间" />
                    <Input prefix="企业/个人名称" placeholder="请输入名称" value={name} onChange={(e) => {setName(e)}} showClear></Input>
                    <Input prefix="账号" placeholder="请输入账号" value={account} onChange={(e) => {setAccount(e)}} showClear></Input>
                </div>
                <div className='search_chi'>
                    <Select onChange={(e) => setValue(e)} optionList={typeList} insetLabel="所属类型" defaultValue={'0'}></Select>
                    <Select optionList={payStatusList} insetLabel="支付状态" defaultValue={'0'}></Select>
                    <Select optionList={resultList} insetLabel="支付结果" defaultValue={'0'}></Select>
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

export default RechargeRecord;
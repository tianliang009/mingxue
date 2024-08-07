import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
const UserBilling = () => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const [company, setCompany] = useState();
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '个人' },
        { value: '2', label: '企业' },
    ];
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '消费时间',
            dataIndex: 'date',
            width: 140
        }, {
            title: '账号',
            dataIndex: 'account',
        }, {
            title: '消费用户',
            dataIndex: 'name',
        }, {
            title: '用户类型',
            dataIndex: 'affiliation',
        }, {
            title: '所属企业',
            dataIndex: 'companyName',
        }, {
            title: '消费金额（元）',
            dataIndex: 'consumptionAmount',
        }, {
            title: '消耗（（k/tokens）',
            dataIndex: 'consumeToken',
        }, {
            title: '输入（k/tokens）',
            dataIndex: 'inputToken',
        }, {
            title: '输出（k/tokens）',
            dataIndex: 'outputToken',
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
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="消费时间" />
                    <Input prefix="账号" placeholder="请输入账号" value={account} onChange={(e) => {setAccount(e)}} showClear></Input>
                    <Input prefix="消费用户" value={name} placeholder="请输入消费用户" onChange={(e) => {setName(e)}} showClear></Input>
                </div>
                <div className='search_chi'>
                    <Select onChange={(e) => setValue(e)} optionList={typeList} insetLabel="用户类型" defaultValue={'0'}></Select>
                    <Input prefix="所属企业" value={company} placeholder="请输入所属企业" onChange={(e) => {setCompany(e)}} showClear></Input>
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
            <p style={{marginBottom: '6px'}}>此统计时间范围内累计总消费：15.858元</p>
            <Table id='tabeller' columns={columns} dataSource={tableData} pagination={pagination} />  
        </>
    );
};

export default UserBilling;
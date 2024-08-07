import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
import { useNavigate } from 'react-router-dom';
const EnterpriseUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const statusList = [
        { value: '0', label: '全部' },
        { value: '1', label: '正常' },
        { value: '2', label: '欠费' },
        { value: '3', label: '停用' },
    ];
    const accumulateList = [
        { value: '0', label: '全部' },
        { value: '1', label: '100元以下' },
        { value: '2', label: '100元-500元' },
        { value: '3', label: '500元-1000元' },
        { value: '4', label: '1000-5000元' },
        { value: '5', label: '5000元-10000元' },
        { value: '6', label: '1万元-5万元' },
        { value: '7', label: '5万元以上' },
    ]
    const balanceList = [
        { value: '0', label: '全部' },
        { value: '1', label: '10元以下' },
        { value: '2', label: '10元-100元' },
        { value: '3', label: '100元-500元' },
        { value: '4', label: '500元-1000元' },
        { value: '5', label: '1000元以上' },
    ]
    const userNumList = [
        { value: '0', label: '全部' },
        { value: '1', label: '0-20人' },
        { value: '2', label: '20-50人' },
        { value: '3', label: '50-100人' },
        { value: '4', label: '100-200人' },
        { value: '5', label: '200-300人' },
        { value: '6', label: '300-500人' },
        { value: '7', label: '500人以上' },
    ]
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '企业名称',
            dataIndex: 'companyName',
        }, {
            title: '负责人账号',
            dataIndex: 'account',
        }, {
            title: '注册日期',
            dataIndex: 'date',
            width: 140
        }, {
            title: '当前状态',
            dataIndex: 'status',
        }, {
            title: '用户总数(人)',
            dataIndex: 'allNum',
        }, {
            title: '累计赠送金额（元）',
            dataIndex: 'giveNum',
        }, {
            title: '累计充值（元）',
            dataIndex: 'accumulate',
        }, {
            title: '费用花费（元）',
            dataIndex: 'spend',
        }, {
            title: '费用余额（元）',
            dataIndex: 'balance',
        }, {
            title: '已开票金额（元）',
            dataIndex: 'invoice',
        }, {
            title: '操作',
            width: 140,
            render: (item) => {
                return <div className='tabOpe'>
                    <p onClick={() => {navigate(`/user/detail/:${item.num}`)}}>详情</p>
                    <p>停用</p>
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
    const setValue = (e) => {
        console.log(e)
    }
    return (
        <>
            <Card style={{marginBottom: '24px'}} className='search_box'>
                <div className='search_chi'>
                    <Input prefix="企业名称" placeholder="请输入企业名称" value={name} onChange={(e) => {setName(e)}} showClear></Input>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="注册时间" />
                    <Select onChange={(e) => setValue(e)} optionList={statusList} insetLabel="当前状态" defaultValue={'0'}></Select>
                </div>
                <div className='search_chi'>
                    <Select optionList={userNumList} insetLabel="用户总数" defaultValue={'0'}></Select>
                    <Select optionList={accumulateList} insetLabel="累计充值" defaultValue={'0'}></Select>
                    <Select optionList={balanceList} insetLabel="费用余额" defaultValue={'0'}></Select>
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

export default EnterpriseUser;
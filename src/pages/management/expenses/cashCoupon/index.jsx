import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
const CashCoupon = () => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '个人' },
        { value: '2', label: '企业' },
    ];
    const voucherList = [
        { value: '0', label: '全部' },
        { value: '1', label: '注册赠送' },
        { value: '2', label: '业务赠送' },
    ]
    const statusList = [
        { value: '0', label: '全部' },
        { value: '1', label: '已生效' },
        { value: '2', label: '未生效' },
    ]
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '赠送时间',
            dataIndex: 'date',
            width: 140
        }, {
            title: '赠送人',
            dataIndex: 'name',
        },{
            title: '企业/个人名称',
            dataIndex: 'companyName',
        }, {
            title: '账号',
            dataIndex: 'account',
        }, {
            title: '账号类型',
            dataIndex: 'affiliation',
        }, {
            title: '代金券类型',
            dataIndex: 'voucherType',
        }, {
            title: '代金券金额（元）',
            dataIndex: 'voucherNum',
        }, {
            title: '代金券状态',
            dataIndex: 'voucherStatus',
        }, {
            title: '操作',
            width: 200,
            render: () => {
                return <div className='tabOpe'>
                    <p>详情</p>
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
    const setValue = (e) => {
        console.log(e)
    }
    return (
        <>
            <Card style={{marginBottom: '24px'}} className='search_box'>
                <div className='search_chi'>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="赠送时间" />
                    <Input prefix="赠送人" placeholder="请输入赠送人" value={account} onChange={(e) => {setAccount(e)}} showClear></Input>
                    <Input prefix="企业/个人名称" placeholder="请输入名称" value={name} onChange={(e) => {setName(e)}} showClear></Input>
                </div>
                <div className='search_chi'>
                    <Select onChange={(e) => setValue(e)} optionList={typeList} insetLabel="账号类型" defaultValue={'0'}></Select>
                    <Select optionList={voucherList} insetLabel="代金券类型" defaultValue={'0'}></Select>
                    <Select optionList={statusList} insetLabel="代金券状态" defaultValue={'0'}></Select>
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

export default CashCoupon;
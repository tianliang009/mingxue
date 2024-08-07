import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
const Consume = () => {
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '成功' },
        { value: '2', label: '失败' },
    ];
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 80,
        }, {
            title: '申请时间',
            dataIndex: 'date',
            width: 140,
        }, {
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '账号',
            dataIndex: 'account',
        }, {
            title: '提现金额(元)',
            dataIndex: 'invoice',
        }, {
            title: '提现账户类型',
            dataIndex: 'accountType',
        }, {
            title: '账户信息',
            dataIndex: 'accountInfomartion',
        }, {
            title: '提现结果',
            dataIndex: 'payResult',
        }, {
            title: '消耗灵感值',
            dataIndex: 'spend',
        }, {
            title: '剩余灵感值',
            dataIndex: 'balance',
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
                    <Input prefix="申请时间" placeholder="请输入申请时间" showClear></Input>
                    <Input prefix="姓名" placeholder="请输入姓名" showClear></Input>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="账号日期" />
                </div>
                <div className='search_chi'>
                    <Input prefix="提现账户类型" placeholder="请输入类型" showClear></Input>
                    <Select onChange={(e) => setValue(e)} optionList={typeList} insetLabel="提现结果" defaultValue={'0'}></Select>
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
            <Table id='tabeller' columns={columns} dataSource={tableData} pagination={pagination} />  
        </>
    );
};

export default Consume;
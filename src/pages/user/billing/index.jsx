import React, {useMemo} from 'react';
import { Table, Card, DatePicker, Button, Select } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh, IconUserCardVideo } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../utils/time';
import tableData from '../../../utils/temporary';
import { useNavigate } from 'react-router-dom';
const Billing = () => {
    const navigate = useNavigate();
    const statusList = [
        { value: '0', label: '全部' },
        { value: '1', label: '类型1' },
        { value: '2', label: '类型2' },
    ];
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
        }, {
            title: '消费时间',
            dataIndex: 'date'
        }, {
            title: '消费用户',
            dataIndex: 'name',
        }, {
            title: '消费金额(元)',
            dataIndex: 'voucherNum'
        }, {
            title: '消耗（k/tokens）',
            dataIndex: 'consumeToken'
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
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="日期范围" />
                    <Select onChange={(e) => setValue(e)} optionList={statusList} insetLabel="消费用户" defaultValue={'0'}></Select>
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
            <p style={{marginBottom: '6px'}}>此统计时间范围内累计总消费：0.858元</p>
            <Table id='tabeller' columns={columns} dataSource={tableData} pagination={pagination} />  
        </>
    );
};

export default Billing;
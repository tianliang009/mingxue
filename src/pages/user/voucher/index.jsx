import React, {useMemo} from 'react';
import { Table, Card, DatePicker, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh, IconUserCardVideo } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../utils/time';
import tableData from '../../../utils/temporary';
import { useNavigate } from 'react-router-dom';
const Voucher = () => {
    const navigate = useNavigate();
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
        }, {
            title: '代金券类型',
            render: () => {
                return <>充值赠送</>
            }
        }, {
            title: '代金券金额(元)',
            dataIndex: 'voucherNum',
        }, {
            title: '代金券状态',
            dataIndex: 'voucherStatus'
        }, {
            title: '生效时间',
            dataIndex: 'date'
        }, {
            title: '有效期',
            render: () => {
                return <>2024-08-25  14:00:15</>
            }
        }, {
            title: '已消耗金额(元)',
            dataIndex: 'spend'
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
    return (
        <>
            <Card style={{marginBottom: '24px'}} className='search_box'>
                <div className='search_chi'>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="日期范围" />
                    <div style={{border:0}}></div>
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

export default Voucher;
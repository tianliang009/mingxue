import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh, IconUserCardVideo } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../utils/time';
import tableData from '../../../utils/temporary';
import { useNavigate } from 'react-router-dom';
const WatchingAdvertisements = () => {
    const navigate = useNavigate();
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
        }, {
            title: '观看时间',
            dataIndex: 'date',
        }, {
            title: '广告类型',
            render: () => {
                return <>15秒广告</>
            }
        }, {
            title: '获得灵感值',
            dataIndex: 'voucherNum',
        }, {
            title: '有效期',
            render: () => {
                return <>2025.06.18 12:00:12</>
            }
        }, {
            title: '当前状态',
            dataIndex: 'voucherStatus'
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
            <Button theme='solid' style={{ float:'left', marginBottom: '12px' }}>
                <IconUserCardVideo />
                去看广告
            </Button>
            <Table id='tabeller' columns={columns} dataSource={tableData} pagination={pagination} />  
        </>
    );
};

export default WatchingAdvertisements;
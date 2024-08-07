import React, {useMemo} from 'react';
import { Table, Card, DatePicker, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh, IconUserCardVideo } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../utils/time';
import tableData from '../../../utils/temporary';
import { useNavigate } from 'react-router-dom';
const InvoiceRecords = () => {
    const navigate = useNavigate();
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
        }, {
            title: '申请时间',
            dataIndex: 'date',
        }, {
            title: '发票抬头',
            dataIndex: 'companyName',
        }, {
            title: '发票类型',
            render: () => {
                return <>增值税普通发票</>
            }
        }, {
            title: '金额(元)',
            dataIndex: 'accumulate'
        }, {
            title: '开票状态',
            render: () => {
                return <>开票中</>
            }
        }, {
            title: '开票号',
            render: () => {
                return <>24112000000065078333</>
            }
        }, {
            title: '操作',
            render: () => {
                return <div className='tabOpe'>
                    <p>下载</p>
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

export default InvoiceRecords;
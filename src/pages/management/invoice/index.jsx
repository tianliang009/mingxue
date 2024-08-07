import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../utils/time';
import tableData from '../../../utils/temporary';
const Invoice = () => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '增值税普通发票' },
        { value: '2', label: '增值税专用发票' },
    ];
    const statusList = [
        { value: '0', label: '全部' },
        { value: '1', label: '开票中' },
        { value: '2', label: '已开票' },
        { value: '3', label: '开票失败' },
    ]
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '申请时间',
            dataIndex: 'date',
            width: 140
        }, {
            title: '申请企业/人名称',
            dataIndex: 'companyName',
        }, {
            title: '发票抬头',
            render: () => {
                return <div>
                    长春工业大学计算机学院
                </div>
            }
        }, {
            title: '发票类型',
            render: () => {
                return <div>
                    增值税专用发票
                </div>
            }
        }, {
            title: '开票时间',
            render: () => {
                return <div>
                    2024.06.18 12:20:122025.06.18 12:00:12
                </div>
            }
        }, {
            title: '开票状态',
            render: () => {
                return <div>
                    已开票
                </div>
            }
        }, {
            title: '开票号',
            render: () => {
                return <div>
                    24112000000065078333
                </div>
            }
        }, {
            title: '操作',
            width: 80,
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
    const setValue = (e) => {
        console.log(e)
    }
    return (
        <>
            <Card style={{marginBottom: '24px'}} className='search_box'>
                <div className='search_chi'>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="申请时间" />
                    <Input placeholder="请输入名称" prefix="申请企业/人名称" value={name} onChange={(e) => {setName(e)}} showClear></Input>
                    <Select onChange={(e) => setValue(e)} optionList={typeList} insetLabel="发票类型" defaultValue={'0'}></Select>
                </div>
                <div className='search_chi'>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="开票时间" />
                    <Select optionList={statusList} insetLabel="开票状态" defaultValue={'0'}></Select>
                    <Input prefix="发票号" placeholder="请输入发票号" value={account} onChange={(e) => {setAccount(e)}} showClear></Input>
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

export default Invoice;
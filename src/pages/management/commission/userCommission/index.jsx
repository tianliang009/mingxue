import React, {useMemo} from 'react';
import { Table, Card, Input, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
const userCommission = () => {
    const columns = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 80,
        }, {
            title: '邀请人姓名',
            dataIndex: 'name',
        }, {
            title: '账号',
            dataIndex: 'account',
        }, {
            title: '所属单位',
            dataIndex: 'companyName',
        }, {
            title: '第一次邀请时间',
            dataIndex: 'date',
        }, {
            title: '最近一次邀请时间',
            render: () => {
                return <div>
                    2024-06-30
                </div>
            }
        }, {
            title: '累计邀请人数（人）',
            dataIndex: 'giveNum',
        }, {
            title: '累计获取灵感值',
            dataIndex: 'accumulate',
        }, {
            title: '已充值金额（元）',
            dataIndex: 'spend',
        }, {
            title: '已提现金额（元）',
            dataIndex: 'balance',
        }, {
            title: '剩余灵感值',
            dataIndex: 'invoice',
        }, {
            title: '剩余可提现金额（元）',
            dataIndex: 'voucherNum',
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
    return (
        <>
            <Card style={{marginBottom: '24px'}} className='search_box'>
                <div className='search_chi'>
                    <Input prefix="邀请人姓名" placeholder="请输入邀请人姓名" showClear></Input>
                    <Input prefix="所属单位" placeholder="请输入所属单位" showClear></Input>
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

export default userCommission;
import React, {useMemo, useEffect} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useState } from 'react';
import timestampConversion from '../../../../utils/time';
import tableData from '../../../../utils/temporary';
import { getDetailTotal, getDetailDatas } from '../../../../utils/userHelper';
import { formatDate } from '../../../../utils/setTime';
const RechargeRecord = () => {
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const typeList = [
        { value: '0', label: '全部' },
        { value: '1', label: '个人' },
        { value: '2', label: '企业' },
    ];
    const payStatusList = [
        { value: '0', label: '全部' },
        { value: '1', label: '已支付' },
        { value: '2', label: '待支付' },
    ]
    const resultList = [
        { value: '0', label: '全部' },
        { value: '1', label: '成功' },
        { value: '2', label: '失败' },
    ]
    // 
    const [recData, setRecData] = useState();
    const [recTotal, setRecTotal] = useState();
    const [recCurrentPage, setRecCurrentPage] = useState(1);
    // 
    const columns = [
        {
            title: '序号',
            dataIndex: 'id',
        }, {
            title: '充值时间',
            dataIndex: 'time',
            render: (item) => {
                return <>{formatDate(item)}</>
            }
        }, {
            title: '企业/个人名称',
            dataIndex: 'name',
        }, {
            title: '账号',
            dataIndex: 'rec_account',
        }, {
            title: '所属类型',
            render: (item) => {
                return <>企业</>
            }
        }, {
            title: '充值金额(元)',
            dataIndex: 'money',
        }, {
            title: '充值类型',
            dataIndex: 'recharge_type',
            render: (item) => {
                return <>{item == '0' ? '预存费用':'实际支付'}</>
            }
        }, {
            title: '支付方式',
            dataIndex: 'way',
            render: (item) => {
                return <>{item == '0' ? '灵感值':'其他支付'}</>
            }
        }, {
            title: '支付状态',
            dataIndex: 'status',
            render: (item) => {
                return <>{item == '0' ? '已支付':'待支付'}</>
            }
        }, {
            title: '支付结果',
            dataIndex: 'result',
            render: (item) => {
                return <>{item == '0' ? '成功':'失败'}</>
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
    const getTableData = async(page) => {
        // 13114715217 recharge rec_account
        let total = await getDetailTotal('0', 'recharge', 'spe')
        let data = await getDetailDatas('0', page||1, 'recharge', 'spe')
        setRecData(data)
        setRecTotal(total)
        setRecCurrentPage(page)
    }
    useEffect(() => {
        getTableData()
    }, [])
    return (
        <>
            <Card style={{marginBottom: '24px'}} className='search_box'>
                <div className='search_chi'>
                    <DatePicker type='dateRange' onChange={(e) => setTime(e)} insetLabel="充值时间" />
                    <Input prefix="企业/个人名称" placeholder="请输入名称" value={name} onChange={(e) => {setName(e)}} showClear></Input>
                    <Input prefix="账号" placeholder="请输入账号" value={account} onChange={(e) => {setAccount(e)}} showClear></Input>
                </div>
                <div className='search_chi'>
                    <Select onChange={(e) => setValue(e)} optionList={typeList} insetLabel="所属类型" defaultValue={'0'}></Select>
                    <Select optionList={payStatusList} insetLabel="支付状态" defaultValue={'0'}></Select>
                    <Select optionList={resultList} insetLabel="支付结果" defaultValue={'0'}></Select>
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
            <Table id='tabeller' columns={columns} dataSource={recData} 
                pagination={{currentPage: recCurrentPage, pageSize: 5, total: recTotal, onPageChange: (page) => (setRecData([]), getTableData(page)) }} />  
        </>
    );
};

export default RechargeRecord;
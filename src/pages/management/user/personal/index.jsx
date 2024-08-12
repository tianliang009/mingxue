import React, {useMemo} from 'react';
import { Table, Card, Input, DatePicker, Select, Button } from '@douyinfe/semi-ui';
import { IconSearch, IconRefresh } from '@douyinfe/semi-icons';
import { useState } from 'react';
// import timestampConversion from '../../../../utils/time';
import { formatDate, timestampConversion } from '../../../../utils/setTime';
// import tableData from '../../../../utils/temporary';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserData, addUserMoney } from '../../../../utils/userHelper';
import { table } from '@douyinfe/semi-ui/lib/es/markdownRender/components';
const PersonalUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [account, setAccount] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [status, setStatus] = useState();
    const [accumulateMax, setAccumulateMax] = useState();
    const [accumulateMin, setAccumulateMin] = useState();
    const [tableData, setTableData] = useState();
    const statusList = [
        { value: '', label: '全部' },
        { value: '0', label: '停用' },
        { value: '1', label: '正常' },
        // { value: '3', label: '欠费' },
    ];
    const accumulateList = [
        { value: '', label: '全部' },
        { value: '1', label: '100元以下', maxNum: 100, minNum: 0 },
        { value: '2', label: '100元-500元', maxNum: 500, minNum: 100},
        { value: '3', label: '500元-1000元', maxNum: 1000, minNum: 500 },
        { value: '4', label: '1000-5000元', maxNum: 5000 , minNum: 1000 },
        { value: '5', label: '5000元-10000元', maxNum: 10000, minNum: 5000 },
        { value: '6', label: '1万元-5万元', maxNum: 50000, minNum: 10000 },
        { value: '7', label: '5万元以上', maxNum: null, minNum: 50000 },
    ]
    const balanceList = [
        { value: '0', label: '全部' },
        { value: '1', label: '10元以下' },
        { value: '2', label: '10元-100元' },
        { value: '3', label: '100元-500元' },
        { value: '4', label: '500元-1000元' },
        { value: '5', label: '1000元以上' },
    ]
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '账号',
            dataIndex: 'account',
        }, {
            title: '注册日期',
            dataIndex: 'date',
            width: 300,
            render: (item) => {
                // return <span>{Date.parse(item)}</span>
                return <span>{formatDate(item)}</span>
            }
        }, {
            title: '当前状态',
            width: 100,
            dataIndex: 'status',
            render: (item) => {
                return <span style={{color:item === '0'?'red':'green'}}>{item === '0'?'停用':'正常'}</span>
            }
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
                    <p onClick={() => {changeStatus(item.status)}}>{item.status === '0'?'启动':'停用'}</p>
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
    const searchOpe = async() => {
        // console.log(accumulateMax,'---',accumulateMin)
        let data = await getUserData(name, account, startTime, endTime, status, accumulateMin, accumulateMax)
        setOpe(data)
    }
    const resertOpe = () => {
        console.log('resert')
    }
    const setRegister = async(e,dateString) => {
        let startStr = dateString? dateString+' 00:00:00' : "0001-01-01 00:00:00";
        let endStr = dateString? dateString+' 23:59:59' : "9999-12-31 23:59:59";
        setEndTime(endStr)
        setStartTime(startStr)
        // let data = await getUserData('', '', `${dateString} 00:00:00`)
        // setOpe(data)
    }
    const setValue = (e) => {
        setStatus(e)
    }
    const changeStatus = (num) => {
        console.log(num)
    }
    const getData = async() => {
        let data = await getUserData()
        setOpe(data)
        // row假数据
        // for(let i=0;i<data.length;i++) {
        //     let temp = {
        //         id: data[i].id,
        //         user_account: data[i].account,
        //         giveNum: Math.floor(Math.random() * 10000),
        //         accumulate: Math.floor(Math.random() * 10000),
        //         spend: Math.floor(Math.random() * 10000),
        //         balance: Math.floor(Math.random() * 10000),
        //         invoice: Math.floor(Math.random() * 10000)
        //     }
        //     addUserMoney(temp).then((res) => {
        //         console.log(res)
        //     })
        // }
    }
    const setOpe = (data) => {
        for(let i=0;i<data.length;i++) {
            data[i].accumulate = data[i].user_money.accumulate
            data[i].balance = data[i].user_money.balance
            data[i].giveNum = data[i].user_money.giveNum
            data[i].invoice = data[i].user_money.invoice;
            data[i].spend = data[i].user_money.spend;
        }
        setTableData(data)
    }
    const changeAccumulate = (e) => {
        setAccumulateMax(accumulateList[e].maxNum);
        setAccumulateMin(accumulateList[e].minNum);
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <Card style={{marginBottom: '24px'}} className='search_box'>
                <div className='search_chi'>
                    <Input prefix="姓名" placeholder="请输入姓名" value={name} onChange={(e) => {setName(e)}} showClear></Input>
                    <Input prefix="账号" placeholder="请输入账号" value={account} onChange={(e) => {setAccount(e)}} showClear></Input>
                    <DatePicker onChange={(e,dateString) => setRegister(e,dateString)} insetLabel="注册时间" />
                </div>
                <div className='search_chi'>
                    <Select onChange={(e) => setValue(e)} optionList={statusList} insetLabel="当前状态" defaultValue={''}></Select>
                    <Select onChange={(e) => changeAccumulate(e)} optionList={accumulateList} insetLabel="累计充值" defaultValue={''}></Select>
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

export default PersonalUser;
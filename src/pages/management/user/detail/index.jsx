import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Table } from '@douyinfe/semi-ui';
// import * as dateFns from 'date-fns';
// import { useParams } from "react-router-dom";
import tableData from '../../../../utils/temporary';
import { useLocation } from 'react-router-dom'
import { getDetailTotal, getDetailDatas } from '../../../../utils/userHelper';
import { formatDate } from '../../../../utils/setTime';
const UserDetail = () => {
    // console.log(useLocation()) // route数据
    let propsData = useLocation()
    // const { id } = useParams();
    // 代金券记录
    const [vouchersData, setVouchersData] = useState();
    const [vouTotal, setVouTotal] = useState();
    const [vouCurrentPage, setVouCurrentPage] = useState(1);
    // 
    const [recData, setRecData] = useState();
    const [recTotal, setRecTotal] = useState();
    const [recCurrentPage, setRecCurrentPage] = useState(1);
    // 
    const columnsFir = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '申请时间',
            dataIndex: 'date',
            width: 140
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
            title: '开票金额(元)',
            render: () => {
                return <div>
                    100
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
    const columnsSec = [
        {
            title: '序号',
            dataIndex: 'num',
        }, {
            title: '消费时间',
            dataIndex: 'date',
        }, {
            title: '消费金额（元）',
            dataIndex: 'consumptionAmount',
        }, {
            title: '消耗（（k/tokens）',
            dataIndex: 'consumeToken',
        }, {
            title: '输入（k/tokens）',
            dataIndex: 'inputToken',
        }, {
            title: '输出（k/tokens）',
            dataIndex: 'outputToken',
        }
    ];
    const rechargeCol = [
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
    const vouchersCol = [
        {
            title: '序号',
            dataIndex: 'id',
        }, {
            title: '代金券类型',
            dataIndex: 'type',
            render: (item) => {
                return <>{item == '0' ? '注册赠送':'业务赠送'}</>
            }
        }, {
            title: '代金券金额（元）',
            dataIndex: 'money',
        }, {
            title: '代金券状态',
            dataIndex: 'status',
            render: (item) => {
                return <>{item == '0' ? '已生效':'未生效'}</>
            }
        }, {
            title: '生效时间',
            dataIndex: 'time',
            render: (item) => {
                return <>{formatDate(item)}</>
            }
        }, {
            title: '有效期',
            dataIndex: 'effective',
            render: (item) => {
                return <>{formatDate(item)}</>
            }
        }, {
            title: '已消耗金额（元）',
            dataIndex: 'consume_money',
        }
    ];
    const pagination = useMemo(
        () => ({
            pageSize: 6,
        }),
        []
    );
    // 代金劵记录
    // const getVoucherData = async(page) =>{
    //     // let data = await getVouchers(propsData.state.account, page||1)
    //     let data = await getDetailDatas(propsData.state.account, page||1, 'vouchers', 'vou_account')
    //     setVouchersData(data)
    //     let total = await getDetailTotal(propsData.state.account, 'vouchers', 'vou_account')
    //     setVouTotal(total)
    // }
    // const handleVouChange = (page) => {
    //     setVouchersData([])
    //     setVouCurrentPage(page)
    //     getVoucherData(page)
    // }
    // recharge vouchers
    // const getRechargeData = async(page) => {
    //     // let data = await getRecs(propsData.state.account, page||1)
    //     let data = await getDetailDatas(propsData.state.account, page||1, 'recharge', 'rec_account')
    //     setRecData(data)
    //     let total = await getDetailTotal(propsData.state.account, 'recharge', 'rec_account')
    //     setRecTotal(total)
    // }
    // const handleRecChange = (page) => {
    //     setRecData([])
    //     setRecCurrentPage(page)
    //     getRechargeData(page)
    // }
    // 
    const handleChange = async(page, str) => {
        // 根据所需字段切
        let eqStr = (str == 'vouchers') ? 'vou_account' : 'rec_account'
        let total = await getDetailTotal(propsData.state.account, str, eqStr)
        let data = await getDetailDatas(propsData.state.account, page||1, str, eqStr)
        str == 'vouchers' ? 
        (setVouCurrentPage(page), setVouchersData(data), setVouTotal(total))
         : 
        (setRecCurrentPage(page), setRecData(data), setRecTotal(total))
    }
    // 
    useEffect(() => {
        handleChange(1, 'vouchers')
        handleChange(1, 'recharge')
        // getVoucherData()
        // getRechargeData()
    }, [])
    return (
        <>
            <div style={{display:'flex'}}>
                <div className='modal_box' style={{flex:'1'}}>
                    <div className='modal_row'>
                        <div>姓名：</div>
                        <div>赵宇</div>
                    </div>
                    <div className='modal_row'>
                        <div>注册日期：</div>
                        <div>2024.06.18  20:00:00</div>
                    </div>
                    <div className='modal_row'>
                        <div>联系电话：</div>
                        <div>19056754897</div>
                    </div>
                    <div className='modal_row'>
                        <div>累计充值金额（元）：</div>
                        <div>300</div>
                    </div>
                    <div className='modal_row'>
                        <div>费用余额（元）：</div>
                        <div>100</div>
                    </div>
                    <div className='modal_row'>
                        <div>昨日消费（元）：</div>
                        <div>1</div>
                    </div>
                    <div className='modal_row'>
                        <div>已开票金额（元）：</div>
                        <div>200</div>
                    </div>
                </div>
                <div className='modal_box' style={{flex:'1'}}>
                    <div className='modal_row'>
                        <div>账号：</div>
                        <div>19056754897</div>
                    </div>
                    <div className='modal_row'>
                        <div>当前状态：</div>
                        <div>正常</div>
                    </div>
                    <div className='modal_row'>
                        <div>累计赠送金额（元）：</div>
                        <div>200</div>
                    </div>
                    <div className='modal_row'>
                        <div>累计消费金额（元）：</div>
                        <div>200</div>
                    </div>
                    <div className='modal_row'>
                        <div>本月消费（元）：</div>
                        <div>10</div>
                    </div>
                    <div className='modal_row'>
                        <div>发票总金额（元）：</div>
                        <div>300</div>
                    </div>
                    <div className='modal_row'>
                        <div>剩余可开票金额（元）：</div>
                        <div>100</div>
                    </div>
                </div>
            </div>
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>代金券记录</h3>
            <Table id='tabeller' columns={vouchersCol} dataSource={vouchersData} 
                pagination={{currentPage: vouCurrentPage, pageSize: 5, total: vouTotal, onPageChange: (page) => (setVouchersData([]), handleChange(page, 'vouchers')) }} /> 
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>充值记录</h3>
            <Table id='tabeller' columns={rechargeCol} dataSource={recData} 
                pagination={{currentPage: recCurrentPage, pageSize: 5, total: recTotal, onPageChange: (page) => (setRecData([]), handleChange(page, 'recharge')) }} /> 
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>计费明细</h3>
            <Table id='tabeller' columns={columnsSec} dataSource={tableData} pagination={pagination} /> 
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>开票记录</h3>
            <Table id='tabeller' columns={columnsFir} dataSource={tableData} pagination={pagination} /> 
        </>
    )
}
export default UserDetail;

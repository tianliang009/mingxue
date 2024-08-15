import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Table, Upload, Toast } from '@douyinfe/semi-ui';
// import * as dateFns from 'date-fns';
// import { useParams } from "react-router-dom";
import tableData from '../../../../utils/temporary';
import { useLocation } from 'react-router-dom'
import { getDetailTotal, getDetailDatas } from '../../../../utils/userHelper';
import { formatDate } from '../../../../utils/setTime';
import supabase from '../../../../utils/supabase';
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
    const [chaData, setChaData] = useState();
    const [chaTotal, setChaTotal] = useState();
    const [chaCurrentPage, setChaCurrentPage] = useState(1);
    // 
    const [invData, setInvData] = useState();
    const [invTotal, setInvTotal] = useState();
    const [invCurrentPage, setInvCurrentPage] = useState(1);
    // 
    const invoicingCol = [
        {
            title: '序号',
            dataIndex: 'id',
        }, {
            title: '申请时间',
            dataIndex: 'time',
            render: (item) => {
                return <>{formatDate(item)}</>
            }
        }, {
            title: '发票抬头',
            dataIndex: 'title'
        }, {
            title: '发票类型',
            dataIndex: 'type',
            render: (item) => {
                return <>{item == '0' ? '增值税专用发票':'其他'}</>
            }
        }, {
            title: '开票金额(元)',
            dataIndex: 'money'
        }, {
            title: '开票状态',
            dataIndex: 'status',
            render: (item) => {
                return <>{item == '0' ? '已开票':'未开票'}</>
            }
        }, {
            title: '开票号',
            dataIndex: 'ticket_num'
        }, {
            title: '操作',
            render: (item) => {
                return <div className='tabOpe'>
                    <a href={item.img_url} target="_blank" download={true}>下载</a>
                    {/* <p onClick={() => downLoadFile(item.img_url)}>下载</p> */}
                </div>;
            }
        }
    ];
    const chargingCol = [
        {
            title: '序号',
            dataIndex: 'id',
        }, {
            title: '消费时间',
            dataIndex: 'time',
            render: (item) => {
                return <>{formatDate(item)}</>
            }
        }, {
            title: '消费金额（元）',
            dataIndex: 'money',
        }, {
            title: '消耗（（k/tokens）',
            dataIndex: 'consume_t',
        }, {
            title: '输入（k/tokens）',
            dataIndex: 'input_t',
        }, {
            title: '输出（k/tokens）',
            dataIndex: 'output_t',
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
    const downLoadFile = async(str) => {
        // const { data, error } = await supabase
        //     .storage
        //     .from('user_image')
        //     .download('13114715217/l_1.jpg')
    }
    const handleChange = async(page, str) => {
        // 根据所需字段切
        // invoicing
        let eqStr = (str == 'vouchers') ? 'vou_account' : ((str == 'recharge') ? 'rec_account' : ((str == 'charging') ? 'cha_account' : 'inv_account'))
        let total = await getDetailTotal(propsData.state.account, str, eqStr)
        let data = await getDetailDatas(propsData.state.account, page||1, str, eqStr)
        str == 'vouchers' ? 
        (setVouCurrentPage(page), setVouchersData(data), setVouTotal(total))
         : 
            ( str == 'recharge' ? ((setRecCurrentPage(page), setRecData(data), setRecTotal(total))) 
            : 
            ( str == 'charging' ? ((setChaCurrentPage(page), setChaData(data), setChaTotal(total))) 
            : (setInvCurrentPage(page), setInvData(data), setInvTotal(total)) ) )

    }
    // 
    useEffect(() => {
        handleChange(1, 'vouchers')
        handleChange(1, 'recharge')
        handleChange(1, 'charging')
        handleChange(1, 'invoicing')
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
            {/* <Upload 
            fileName='file' uploadTrigger='custom'
            action={""} showUploadList={false}
            accept='image/*' onError={() => Toast.error("上传失败")}
            onFileChange={async (files) => {
                const avatarFile = files[0];
                const fileName = avatarFile.name;
                const { data, error } = await supabase
                .storage
                .from('user_image')
                .upload(`${propsData.state.account}/${fileName}`, avatarFile, {
                    cacheControl: '3600',
                    upsert: false
                })
                console.log(data,'---',error)
            }}
            >test上传</Upload> */}
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>代金券记录</h3>
            <Table id='tabeller' columns={vouchersCol} dataSource={vouchersData} 
                pagination={{currentPage: vouCurrentPage, pageSize: 5, total: vouTotal, onPageChange: (page) => (setVouchersData([]), handleChange(page, 'vouchers')) }} /> 
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>充值记录</h3>
            <Table id='tabeller' columns={rechargeCol} dataSource={recData} 
                pagination={{currentPage: recCurrentPage, pageSize: 5, total: recTotal, onPageChange: (page) => (setRecData([]), handleChange(page, 'recharge')) }} /> 
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>计费明细</h3>
            <Table id='tabeller' columns={chargingCol} dataSource={chaData} 
                pagination={{currentPage: chaCurrentPage, pageSize: 5, total: chaTotal, onPageChange: (page) => (setChaData([]), handleChange(page, 'charging')) }}  /> 
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>开票记录</h3>
            <Table id='tabeller' columns={invoicingCol} dataSource={invData} 
                pagination={{currentPage: invCurrentPage, pageSize: 5, total: invTotal, onPageChange: (page) => (setInvData([]), handleChange(page, 'invoicing')) }} /> 
        </>
    )
}
export default UserDetail;

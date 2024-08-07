import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Table, Avatar, Input, Space } from '@douyinfe/semi-ui';
import * as dateFns from 'date-fns';
import { useParams } from "react-router-dom";
import tableData from '../../../../utils/temporary';
const UserDetail = () => {
    const { id } = useParams();
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
    const columnsThi = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '充值时间',
            dataIndex: 'date',
            width: 140
        }, {
            title: '充值金额(元)',
            dataIndex: 'accumulate',
        }, {
            title: '充值类型',
            dataIndex: 'accumulateType',
        }, {
            title: '支付方式',
            dataIndex: 'payWay',
        }, {
            title: '支付状态',
            dataIndex: 'payStatus',
        }, {
            title: '支付结果',
            dataIndex: 'payResult',
        }
    ];
    const columnsFou = [
        {
            title: '序号',
            dataIndex: 'num',
            width: 60
        }, {
            title: '代金券类型',
            dataIndex: 'voucherType',
        }, {
            title: '代金券金额（元）',
            dataIndex: 'voucherNum',
        }, {
            title: '代金券状态',
            dataIndex: 'voucherStatus',
        }, {
            title: '生效时间',
            dataIndex: 'date',
        }, {
            title: '有效期',
            render: () => {
                return <>
                    2024-08-25  14:00:15
                </>
            }
        }, {
            title: '已消耗金额（元）',
            dataIndex: 'consumeToken',
        }, {
            title: '操作',
            width: 200,
            render: () => {
                return <div className='tabOpe'>
                    <p>详情</p>
                    <p>编辑</p>
                    <p>删除</p>
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
            <Table id='tabeller' columns={columnsFou} dataSource={tableData} pagination={pagination} /> 
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>充值记录</h3>
            <Table id='tabeller' columns={columnsThi} dataSource={tableData} pagination={pagination} /> 
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>计费明细</h3>
            <Table id='tabeller' columns={columnsSec} dataSource={tableData} pagination={pagination} /> 
            <h3 style={{marginBottom: '12px', marginTop: '36px'}}>开票记录</h3>
            <Table id='tabeller' columns={columnsFir} dataSource={tableData} pagination={pagination} /> 
        </>
    )
}
export default UserDetail;

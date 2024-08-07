import React, { useState } from 'react';
import { Card, Input, RadioGroup, Radio, Button } from '@douyinfe/semi-ui';

const InvoiceIssuance = () => {
    const [radioValue, setValue] = useState(1);
    const [radioValue2, setValue2] = useState(1);
    const changeRadio = (e) => {
        console.log('radio checked', e.target.value);
        if(e.target.value === 1) {
            setValue2(1)
        }
        setValue(e.target.value);
    };
    const changeRadio2 = (e) => {
        console.log('radio checked', e.target.value);
        setValue2(e.target.value);
    };
    return (
        <div className='issuance_box'>
            <Card className='card_box'>
                <p>1.目前发票仅支持申请电子发票，支持按消耗金额开票和按充值金额开票（代金券不可开票），最大可开票金额不能超过总充值金额。</p>
                <p>2.一般会在收到发票申请后的 3-7 个工作日为您开具（如遇特殊情况可能会有延迟）。</p>
                <p>3.可以在“开票记录”里面查看历次开票记录，同时能够下载发票。</p>
            </Card>
            <h3>可开票金额</h3>
            <div className='invoicing_box'>
                <div>
                    <span>当前可开票金额</span>
                    <p>1.00</p>
                </div>
                <div>
                    <span></span>
                    <p>=</p>
                </div>
                <div>
                    <span>充值金额</span>
                    <p>1.00</p>
                </div>
                <div>
                    <span></span>
                    <p>-</p>
                </div>
                <div>
                    <span>已开票金额（已开票/开票中金额-已退票金额）</span>
                    <p>0.00</p>
                </div>                
            </div>
            <h3>请填写开票信息</h3>
            <div className='invoicing_info'>
                <div className='info_chi'>
                    <div>
                        <span className='must_font'>*</span>
                        开票金额：
                    </div>
                    <div>
                        <Input placeholder={'请输入开票金额'} showClear style={{width: '500px'}}></Input>
                    </div>
                </div>
                <div className='info_chi'>
                    <div>
                        <span className='must_font'>*</span>
                        抬头类型：
                    </div>
                    <div>
                        <RadioGroup onChange={changeRadio} value={radioValue} aria-label="" name="demo-radio-group">
                            <Radio value={1}>个人</Radio>
                            <Radio value={2}>企业</Radio>
                        </RadioGroup>
                    </div>
                </div>
                <div className='info_chi'>
                    <div>
                        <span className='must_font'>*</span>
                        发票类型：
                    </div>
                    <div>
                        <RadioGroup onChange={changeRadio2} value={radioValue2} aria-label="" name="demo-radio-group">
                            <Radio value={1}>增值税普通发票</Radio>
                            <Radio style={{display: radioValue === 2 ? 'flex':'none'}} value={2}>增值税专用发票</Radio>
                        </RadioGroup>
                    </div>
                </div>
                <div className='info_chi'>
                    <div>
                        <span className='must_font'>*</span>
                        开票抬头：
                    </div>
                    <div>
                        <Input placeholder={'个人'} disabled showClear style={{width: '500px'}}></Input>
                    </div>
                </div>
                {/* 抬头类型-企业 */}
                <div style={{display: radioValue === 2 ? 'block':'none'}}>
                    <div className='info_chi'> 
                        <div>
                            <span className='must_font' style={{display: radioValue2 === 2 ? 'inline-block':'none'}}>*</span>
                            纳税人识别号：</div>
                        <div>
                            <Input placeholder={'请输入识别号'} showClear style={{width: '500px'}}></Input>
                        </div>
                    </div>
                    <div className='info_chi'> 
                        <div>
                            <span className='must_font' style={{display: radioValue2 === 2 ? 'inline-block':'none'}}>*</span>
                            基本开户银行：</div>
                        <div>
                            <Input placeholder={'请输入开户银行'} showClear style={{width: '500px'}}></Input>
                        </div>
                    </div>
                    <div className='info_chi'> 
                        <div>
                            <span className='must_font' style={{display: radioValue2 === 2 ? 'inline-block':'none'}}>*</span>
                            基本开户账号：</div>
                        <div>
                            <Input placeholder={'请输入开户账号'} showClear style={{width: '500px'}}></Input>
                        </div>
                    </div>
                    <div className='info_chi'> 
                        <div>
                            <span className='must_font' style={{display: radioValue2 === 2 ? 'inline-block':'none'}}>*</span>
                            企业注册地址：</div>
                        <div>
                            <Input placeholder={'请输入注册地址'} showClear style={{width: '500px'}}></Input>
                        </div>
                    </div>
                    <div className='info_chi'> 
                        <div>
                            <span className='must_font' style={{display: radioValue2 === 2 ? 'inline-block':'none'}}>*</span>
                            企业注册电话：</div>
                        <div>
                            <Input placeholder={'请输入注册电话'} showClear style={{width: '500px'}}></Input>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className='info_chi'>
                    <div>
                        <span className='must_font'>*</span>
                        发票接收邮箱：
                    </div>
                    <div>
                        <Input placeholder={'请输入邮箱'} showClear style={{width: '500px'}}></Input>
                    </div>
                </div>
                <div className='info_chi'>
                    <div></div>
                    <div>
                        <Button theme='solid' type='primary'>申请开票</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceIssuance;
import React, { useState } from 'react';
import { Card, Input, RadioGroup, Radio, Button } from '@douyinfe/semi-ui';
import { IconInfoCircle } from '@douyinfe/semi-icons';
const Management = () => {
    const [radioValue, setValue] = useState(1);
    const [radioValue2, setValue2] = useState(1);
    const changeRadio2 = (e) => {
        console.log('radio checked', e.target.value);
        setValue2(e.target.value);
    };
    return (
        <div className='issuance_box'>
            {/* <p>
                <IconInfoCircle />
                请与贵司财务人员核实发票信息,确保信息填写正确,以免影响发票的后续使用
            </p> */}
            <div className='invoicing_info'>
                <div className='info_chi'>
                    <div>
                        抬头类型：
                    </div>
                    <div>
                        <RadioGroup value={radioValue} aria-label="" name="demo-radio-group">
                            <Radio value={1}>企业</Radio>
                        </RadioGroup>
                    </div>
                </div>
                <div className='info_chi'>
                    <div>
                        发票类型：
                    </div>
                    <div>
                        <RadioGroup onChange={changeRadio2} value={radioValue2} aria-label="" name="demo-radio-group">
                            <Radio value={1}>增值税普通发票</Radio>
                            <Radio value={2}>增值税专用发票</Radio>
                        </RadioGroup>
                    </div>
                </div>
                <div className='info_chi'>
                    <div>
                        <span className='must_font'>*</span>
                        开票抬头：
                    </div>
                    <div>
                        <Input placeholder={'请输入开票抬头'} showClear style={{width: '500px'}}></Input>
                    </div>
                </div>
                {/* 抬头类型-企业 */}
                <div>
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
                <div className='info_chi'>
                    <div></div>
                    <div>
                        <Button theme='solid' type='primary'>保存</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Management;
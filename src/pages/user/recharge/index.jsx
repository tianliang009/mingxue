import React from 'react';
import { Tabs, TabPane, Input, Button, InputNumber, Checkbox } from '@douyinfe/semi-ui';
import { useState } from 'react';

function Recharge(props) {
    const [buttonList, ] = useState([
        { num: 50, ind: 0 },
        { num: 100, ind: 1 },
        { num: 200, ind: 2 },
        { num: 500, ind: 3 },
        { num: 1000, ind: 4 },
        { num: 2000, ind: 5 },
        { num: 5000, ind: 6 },
        { num: 'custom', ind: 7 }
    ]);
    const [activeNum, setActiveNum] = useState(0)
    const [visibily, setVisibily] = useState(false)
    // 支付方式
    const [wayList, ] = useState([
        { font: '微信', icon: 'https://platform.moonshot.cn/wechat.svg', ind: 0 },
        { font: '支付宝', icon: 'https://platform.moonshot.cn/alipay.png', ind: 1},
        { font: '灵感值', icon: 'https://axure-file.lanhuapp.com/md5__e134061dc21ced3fa21cd562b2a7edef.png', ind: 2},
    ])
    const [wayNum, setWayNum] = useState(0)
    const setPrice = (item) => {
        setActiveNum(item.ind)
        if(item.num === 'custom') {
            setVisibily(true)
            return;
        }
        setVisibily(false)
    }
    const setWay = (item) => {
        console.log(item.ind)
        setWayNum(item.ind)
    }
    return (
        <div className='recharge_box'>
            <Tabs type="line">
                <TabPane tab="预存费用" itemKey="1">
                    <div className='recharge_info'>
                        <div className='info_chi'>
                            <div>
                                支付金额：
                            </div>
                            <div className='enter_chi'>
                                <div>
                                    {buttonList.map((item,index)=> {
                                        return (
                                            <Button key={index} onClick={() => setPrice(item)} className={item.ind === activeNum ? 'active':''}>
                                                { item.num === 'custom' ? '自定义' : item.num + '元' }
                                            </Button>
                                        )
                                    })}
                                </div>
                                <div>
                                    <InputNumber style={{display: visibily ? 'block':'none'}} prefix="¥" innerButtons placeholder={'提示: 最小充值金额1元'} min={1} />
                                </div>
                            </div>
                        </div>
                        <div className='info_chi' style={{marginTop: '18px'}}>
                            <div>
                                支付方式：
                            </div>
                            <div className='enter_chi'>
                                <div>
                                    {wayList.map((item,index)=> {
                                        return (
                                            <Button key={index} onClick={() => setWay(item)} className={item.ind === wayNum ? 'active':''}>
                                                <img src={item.icon} style={{width: '18px', marginRight: '6px'}} alt="" />
                                                {item.font}
                                            </Button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='info_chi'>
                            <div></div>
                            <div>
                                <Button theme='solid' type='primary' style={{ padding: '20px 72px', marginTop: '18px', borderRadius: '8px' }}>
                                    确认支付
                               </Button>
                            </div>
                        </div>
                        <div className='info_chi' style={{marginTop: '12px'}}>
                            <div></div>
                            <div>
                                <Checkbox defaultChecked onChange={e => console.log(e)} aria-label="">
                                    确认支付即代表同意本平台
                                    <span style={{color: '#1677ff'}}>《充值协议》</span>
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="会员充值" itemKey="2">
                    <div className='vip_box'>
                        <div>
                            <div className='vip_font'>基础版</div>
                        </div>
                        <div>
                            <div className='vip_level'>
                                <div className='prompt'>限新用户</div>
                                <h3>连续包月</h3>
                                <span>￥9.9/月</span>
                                <del>¥ 39.9</del>
                            </div>
                        </div>
                        <div>
                            <div className='vip_level'>
                                <div className='prompt'>限新用户</div>
                                <h3>连续包月</h3>
                                <span>￥39.9/季</span>
                                <del>￥128.8</del>
                            </div>
                        </div>
                        <div>
                            <div className='vip_level'>
                                <div className='prompt'>限新用户</div>
                                <h3>连续包月</h3>
                                <span>￥159.9年</span>
                                <del>¥ 558.8</del>
                            </div>
                        </div>
                    </div>
                    <div className='vip_box'>
                        <div>
                            <div className='vip_font'>高级版</div>
                        </div>
                        <div>
                            <div className='vip_level'>
                                <div className='prompt'>限新用户</div>
                                <h3>连续包月</h3>
                                <span>￥50/月</span>
                                <del>¥ 128.8</del>
                            </div>
                        </div>
                        <div>
                            <div className='vip_level'>
                                <div className='prompt'>限新用户</div>
                                <h3>连续包月</h3>
                                <span>￥150/季</span>
                                <del>￥568.8</del>
                            </div>
                        </div>
                        <div>
                            <div className='vip_level'>
                                <div className='prompt'>限新用户</div>
                                <h3>连续包月</h3>
                                <span>￥600年</span>
                                <del>¥ 3155.5</del>
                            </div>
                        </div>
                    </div>
                    <div className='enter_chi' style={{paddingLeft: '48px'}}>
                        <div>
                            {wayList.map((item,index)=> {
                                return (
                                    <Button key={index} onClick={() => setWay(item)} className={item.ind === wayNum ? 'active':''}>
                                        <img src={item.icon} style={{width: '18px', marginRight: '6px'}} alt="" />
                                        {item.font}
                                    </Button>
                                )
                            })}
                        </div>
                        <Button theme='solid' type='primary' style={{ padding: '20px 72px', marginTop: '18px', borderRadius: '8px', marginBottom: '18px' }}>确认支付</Button>
                        <div>
                            <Checkbox defaultChecked onChange={e => console.log(e)} aria-label="">
                                确认支付即代表同意本平台
                                <span style={{color: '#1677ff'}}>《充值协议》</span>
                            </Checkbox>
                        </div>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Recharge;
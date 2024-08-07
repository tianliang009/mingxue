import React from 'react';
import { Button } from '@douyinfe/semi-ui';

const Account = () => {
    return (
        <>
        <div className='account_box'>
            <div>
                <p>充值账户余额（元）</p>
                <h3>¥ 1,000.00</h3>
            </div>
            <div>
                <p>累计主动充值（元）</p>
                <h3>¥ 1,000.00</h3>
            </div>
            <div>
                <p>赠送充值金额（元）</p>
                <h3>¥ 100</h3>
            </div>
            <div>
                <p>获取总灵感值</p>
                <h3>¥ 1,0025</h3>
            </div>
            <div>
                <p>返佣获取灵感值</p>
                <h3>¥ 9000</h3>
            </div>
            <div>
                <p>看广告赚取灵感值</p>
                <h3>¥ 1025</h3>
            </div>
            <div>
                <p>总消费金额（元）</p>
                <h3>¥ 500.00</h3>
            </div>
            <div>
                <p>本月消费（元）</p>
                <h3>¥ 100.00</h3>
            </div>
            <div>
                <p>昨日消费（元）</p>
                <h3>¥ 100</h3>
            </div>
            <div>
                <p>发票总金额（元）</p>
                <h3>¥ 1,000.00</h3>
            </div>
            <div>
                <p>已开发票金额（元）</p>
                <h3>¥ 900.00</h3>
            </div>
            <div>
                <p>待开票金额（元）</p>
                <h3>¥ 100</h3>
            </div>
        </div>
        <div style={{textAlign:'center',marginTop:'24px'}}>
            <Button theme='solid' type='primary' style={{ padding: '20px 72px', marginTop: '18px', borderRadius: '8px', marginRight: '18px' }}>
                去充值
            </Button>
            <Button theme='solid' type='primary' style={{ padding: '20px 72px', marginTop: '18px', borderRadius: '8px', marginRight: '18px' }}>
                去看广告
            </Button>
            <Button theme='solid' type='primary' style={{ padding: '20px 72px', marginTop: '18px', borderRadius: '8px', marginRight: '18px' }}>
                去开发票
            </Button>
        </div>
        </>
    );
};

export default Account;
// 路由数据
import { IconQrCode, IconMenu, IconFile, IconDesktop, IconArticle,
    IconGridView1, IconSetting, IconCreditCard } from '@douyinfe/semi-icons';
import { IconBanner } from '@douyinfe/semi-icons-lab';
import level from './level';
let routerJson = [];
if(level === 0) {
    routerJson=[
        {
            path: 'account',
            text: '我的账户',
            icon: '',
        },{
            path: 'recharge',
            text: '我的充值',
            icon: '',
        },{
            path: 'rechargeRecord',
            text: '充值记录',
            icon: '',
        },{
            path: 'billing',
            text: '计费明细',
            icon: '',
        },{
            path: 'voucher',
            text: '代金劵查询',
            icon: '',
        },{
            path: 'invoiceIssuance',
            text: '我要开票',
            icon: '',
        },{
            path: 'invoiceRecords',
            text: '开票记录',
            icon: '',
        },{
            path: 'management',
            text: '抬头管理',
            icon: '',
        },{
            path: 'invitationCode',
            text: '我的邀请码',
            icon: <IconQrCode />,
        },{
            path: 'commission',
            text: '我的佣金',
            icon: '💰',
        },{
            path: 'withdrawal',
            text: '我的提现',
            icon: <IconBanner />,
        },{
            path: 'watchingAdvertisements',
            text: '看广告赚钱',
            icon: '📺',
        },
    ];
} else if(level === 1){
    routerJson=[
        {
            text: '用户管理',
            icon: <IconMenu />,
            path: 'user',
            items:[
                {
                    itemKey: 'personalUser',
                    text: '个人用户',
                    icon: '',
                },{
                    itemKey: 'enterpriseUser',
                    text: '企业用户',
                    icon: '',
                }
            ]
        },{
            text: '费用管理',
            icon:  <IconFile />,
            path: 'expenses',
            items:[
                {
                    itemKey: 'manRechargeRecord',
                    text: '充值记录',
                    icon: '',
                },{
                    itemKey: 'cashCoupon',
                    text: '代金券管理',
                    icon: '',
                },{
                    itemKey: 'userBilling',
                    text: '用户计费查询',
                    icon: '',
                },{
                    itemKey: 'modelBilling',
                    text: '模型计费查询',
                    icon: '',
                },
            ]
        },{
            text: 'token监管',
            icon:  <IconGridView1 />,
            path: 'supervise',
            items:[
                {
                    itemKey: 'consumption',
                    text: '模型用量统计',
                    icon: '',
                },{
                    itemKey: 'buy',
                    text: '模型购买记录',
                    icon: '',
                }
            ]
        },{
            text: '佣金管理',
            icon:  <IconCreditCard />,
            path: 'commission',
            items:[
                {
                    itemKey: 'give',
                    text: '佣金赠送管理',
                    icon: '',
                },{
                    itemKey: 'consume',
                    text: '佣金消耗查询',
                    icon: '',
                },{
                    itemKey: 'userCommission',
                    text: '用户佣金查询',
                    icon: '',
                }
            ]
        }, {
            path: 'advertisement',
            text: '广告赠送记录',
            icon:  <IconDesktop />,
        }, {
            path: 'invoice',
            text: '发票管理',
            icon: <IconArticle />,
        }, {
            text: '基础设置',
            icon:  <IconSetting />,
            path: 'foundation',
            items:[
                {
                    itemKey: 'feeConfiguration',
                    text: '收费配置',
                    icon: '',
                }, {
                    itemKey: 'setVouchers',
                    text: '代金劵配置',
                    icon: '',
                }, {
                    itemKey: 'modelManagement',
                    text: '模型管理',
                    icon: '',
                }, {
                    itemKey: 'setCommission',
                    text: '佣金设置',
                    icon: '',
                }, {
                    itemKey: 'setInspiration',
                    text: '广告灵感值设置',
                    icon: '',
                }
            ]
        },
    ]
}
export default routerJson;

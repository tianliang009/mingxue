import React, { Suspense, lazy } from 'react';
import Main from '../pages/main';
import level from '../router/level';
const lazyLoad = (src) => <Suspense fallback={<>...</>}>{React.createElement(lazy(src))}</Suspense>;
const routes = [
    {
        // index: true,
        path: '/login',
        element: lazyLoad(() => import('../pages/login'))
    }, {
        path: '*',
        element: lazyLoad(() => import('../components/NotFond'))
    },
    // {
    //     path: '/',
    //     element: <Main />,
    //     children: [{
    //             path: 'yinghua',
    //             element: lazyLoad(() => import('../pages/yinghua/index'))
    //         }, {
    //             path: 'lol',
    //             element: lazyLoad(() => import('../pages/lol/index'))
    //         },
    //     ]
    // }
]
if(level === 0) {
routes.push({
    path: '/',
    element: <Main />,
    children: [
        {
        path: 'account',
        element: lazyLoad(() => import('../pages/user/account/index'))
        },{
        path: 'recharge',
        element: lazyLoad(() => import('../pages/user/recharge/index'))
        },{
        path: 'rechargeRecord',
        element: lazyLoad(() => import('../pages/user/rechargeRecord/index'))
        },{
        path: 'billing',
        element: lazyLoad(() => import('../pages/user/billing/index'))
        },{
        path: 'voucher',
        element: lazyLoad(() => import('../pages/user/voucher/index'))
        },{
        path: 'invoiceIssuance',
        element: lazyLoad(() => import('../pages/user/invoiceIssuance/index'))
        },{
        path: 'invoiceRecords',
        element: lazyLoad(() => import('../pages/user/invoiceRecords/index'))
        },{
        path: 'management',
        element: lazyLoad(() => import('../pages/user/management/index'))
        },{
        path: 'invitationCode',
        element: lazyLoad(() => import('../pages/user/invitationCode/index'))
        },{
        path: 'commission',
        element: lazyLoad(() => import('../pages/user/commission/index'))
        },{
        path: 'withdrawal',
        element: lazyLoad(() => import('../pages/user/withdrawal/index'))
        },{
        path: 'watchingAdvertisements',
        element: lazyLoad(() => import('../pages/user/watchingAdvertisements/index'))
        },
    ]
})
} else if(level === 1) {
routes.push({
    path: '/',
    element: <Main />,
    children: [
        {
        path: 'personalUser',
        element: lazyLoad(() => import('../pages/management/user/personal/index'))
        }, {
        path: 'enterpriseUser',
        element: lazyLoad(() => import('../pages/management/user/enterprise/index'))
        }, {
        // path: 'user/detail/:id',
        path: 'user/detail/',
        element: lazyLoad(() => import('../pages/management/user/detail/index'))
        }, {
        path: 'manRechargeRecord',
        element: lazyLoad(() => import('../pages/management/expenses/rechargeRecord/index'))
        }, {
        path: 'cashCoupon',
        element: lazyLoad(() => import('../pages/management/expenses/cashCoupon/index'))
        }, {
        path: 'userBilling',
        element: lazyLoad(() => import('../pages/management/expenses/userBilling/index'))
        }, {
        path: 'modelBilling',
        element: lazyLoad(() => import('../pages/management/expenses/modelBilling/index'))
        }, {
        path: 'consumption',
        element: lazyLoad(() => import('../pages/management/supervise/consumption/index'))
        }, {
        path: 'buy',
        element: lazyLoad(() => import('../pages/management/supervise/buy/index'))
        }, {
        path: 'give',
        element: lazyLoad(() => import('../pages/management/commission/give/index'))
        }, {
        path: 'consume',
        element: lazyLoad(() => import('../pages/management/commission/consume/index'))
        }, {
        path: 'userCommission',
        element: lazyLoad(() => import('../pages/management/commission/userCommission/index'))
        }, {
        path: 'advertisement',
        element: lazyLoad(() => import('../pages/management/advertisement/index'))
        }, {
        path: 'invoice',
        element: lazyLoad(() => import('../pages/management/invoice/index'))
        }, {
        path: 'feeConfiguration',
        element: lazyLoad(() => import('../pages/management/foundation/feeConfiguration/index'))
        }, {
        path: 'setVouchers',
        element: lazyLoad(() => import('../pages/management/foundation/setVouchers/index'))
        }, {
        path: 'modelManagement',
        element: lazyLoad(() => import('../pages/management/foundation/modelManagement/index'))
        }, {
        path: 'setCommission',
        element: lazyLoad(() => import('../pages/management/foundation/setCommission/index'))
        }, {
        path: 'setInspiration',
        element: lazyLoad(() => import('../pages/management/foundation/setInspiration/index'))
        }
    ]
})
}
export default routes;
import React, { Suspense, lazy } from 'react';
import Main from '../pages/main';
const lazyLoad = (src) => <Suspense fallback={<>...</>}>{React.createElement(lazy(src))}</Suspense>;
const routes = [
    {
        // index: true,
        path: '/login',
        element: lazyLoad(() => import('../pages/login'))
    }, {
        path: '*',
        element: lazyLoad(() => import('../components/NotFond'))
    }, {
        path: '/',
        element: <Main />,
        children: [
            {
                path: 'lol',
                element: lazyLoad(() => import('../pages/lol/index'))
            },
        ]
    }
]
export default routes;
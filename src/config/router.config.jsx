import React, { Suspense, lazy } from 'react';
const lazyLoad = (src) => <Suspense fallback={<>...</>}>{React.createElement(lazy(src))}</Suspense>;
const routes = [
    {
        index: true,
        element: lazyLoad(() => import('../pages/login'))
    }, {
        path: '*',
        element: lazyLoad(() => import('../components/NotFond'))
    }
]
export default routes;
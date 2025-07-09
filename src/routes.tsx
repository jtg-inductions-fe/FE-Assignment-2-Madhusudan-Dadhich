import { lazy, Suspense } from 'react';

import { BaseLayout } from 'layouts/BaseLayout';
import { MainLayout } from 'layouts/MainLayout';
import { ErrorPage } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

const DashboardPage = lazy(() => import('pages/DashboardPage'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: '',
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<div>Loading Main...</div>}>
                                <DashboardPage />
                            </Suspense>
                        ),
                    },
                ],
                errorElement: <ErrorPage />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

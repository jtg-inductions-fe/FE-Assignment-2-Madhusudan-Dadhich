/* Static stored data for all products */
import { Product } from 'types/Product';

export const productData: Product[] = [
    {
        productId: 'PD100001',
        name: 'Restaurant Booking App',
        description: 'React & Bootstrap Framework',
        totalSales: 70,
        redirectTo: '/product/restaurant-booking-app',
    },
    {
        productId: 'PD100002',
        name: 'E-commerce Dashboard',
        description: 'Built with MUI & TypeScript',
        totalSales: 120,
        redirectTo: '/product/ecommerce-dashboard',
    },
    {
        productId: 'PD100003',
        name: 'Mobile Food Delivery UI',
        description: 'Tailwind CSS + React Native',
        totalSales: 45,
        redirectTo: '/product/mobile-food-delivery-ui',
    },
    {
        productId: 'PD100004',
        name: 'Portfolio Builder',
        description: 'Next.js, Markdown, and MDX support',
        totalSales: 86,
        redirectTo: '/product/portfolio-builder',
    },
    {
        productId: 'PD100005',
        name: 'Crypto Tracker App',
        description: 'Real-time crypto dashboard with Recharts & WebSocket',
        totalSales: 210,
        redirectTo: '/product/crypto-tracker-app',
    },
    {
        productId: 'PD100006',
        name: 'SaaS Admin Template',
        description: 'Admin UI with Auth, i18n, and Analytics',
        totalSales: 134,
        redirectTo: '/product/saas-admin-template',
    },
];

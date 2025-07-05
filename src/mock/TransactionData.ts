/* Static stored data for all transactions */
import { Transaction } from 'types/Transaction';

export const transactions: Transaction[] = [
    {
        transactionId: 'TR100001',
        consumer: {
            consumerId: 'CM100001',
            name: 'Neil Sims',
            email: 'email@example.com',
            profileImage: 'Avatar1',
            totalSpent: {
                value: 367,
                currency: 'usd',
            },
        },
        totalAmount: {
            value: 2300,
            currency: 'usd',
        },
        status: 'completed',
        date: 1751638896,
    },
    {
        transactionId: 'TR100002',
        consumer: {
            consumerId: 'CM100002',
            name: 'Lana Rhodes',
            email: 'lana.rhodes@example.com',
            profileImage: 'Avatar2',
            totalSpent: {
                value: 482,
                currency: 'usd',
            },
        },
        totalAmount: {
            value: 1499,
            currency: 'usd',
        },
        status: 'inProgress',
        date: 1751638897,
    },
    {
        transactionId: 'TR100003',
        consumer: {
            consumerId: 'CM100003',
            name: 'Marcus Brown',
            email: 'marcus.brown@example.com',
            profileImage: 'Avatar3',
            totalSpent: {
                value: 159,
                currency: 'usd',
            },
        },
        totalAmount: {
            value: 699,
            currency: 'usd',
        },
        status: 'cancelled',
        date: 1751638898,
    },
    {
        transactionId: 'TR100004',
        consumer: {
            consumerId: 'CM100004',
            name: 'Sophia Johnson',
            email: 'sophia.johnson@example.com',
            profileImage: 'Avatar4',
            totalSpent: {
                value: 824,
                currency: 'usd',
            },
        },
        totalAmount: {
            value: 3200,
            currency: 'usd',
        },
        status: 'completed',
        date: 1751638899,
    },
    {
        transactionId: 'TR100005',
        consumer: {
            consumerId: 'CM100005',
            name: 'Daniel Lee',
            email: 'daniel.lee@example.com',
            profileImage: 'Avatar5',
            totalSpent: {
                value: 238,
                currency: 'usd',
            },
        },
        totalAmount: {
            value: 899,
            currency: 'usd',
        },
        status: 'inProgress',
        date: 1751638900,
    },
    {
        transactionId: 'TR100006',
        consumer: {
            consumerId: 'CM100006',
            name: 'Emily Carter',
            email: 'emily.carter@example.com',
            profileImage: 'Avatar6',
            totalSpent: {
                value: 701,
                currency: 'usd',
            },
        },
        totalAmount: {
            value: 1470,
            currency: 'usd',
        },
        status: 'completed',
        date: 1751638901,
    },
];

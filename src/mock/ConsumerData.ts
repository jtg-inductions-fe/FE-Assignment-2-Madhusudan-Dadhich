/* Static stored data for all consumers */
import { Consumer } from 'types/Consumer';

export const consumers: Consumer[] = [
    {
        consumerId: 'CM100001',
        name: 'Neil Sims',
        email: 'email@example.com',
        profileImage: 'src/assets/resources/images/Avatar1.webp',
        totalSpent: {
            value: 367,
            currency: 'usd',
        },
    },
    {
        consumerId: 'CM100002',
        name: 'Lana Rhodes',
        email: 'lana.rhodes@example.com',
        profileImage: 'src/assets/resources/images/Avatar2.webp',
        totalSpent: {
            value: 482,
            currency: 'usd',
        },
    },
    {
        consumerId: 'CM100003',
        name: 'Marcus Brown',
        email: 'marcus.brown@example.com',
        profileImage: 'src/assets/resources/images/Avatar3.webp',
        totalSpent: {
            value: 159,
            currency: 'usd',
        },
    },
    {
        consumerId: 'CM100004',
        name: 'Sophia Johnson',
        email: 'sophia.johnson@example.com',
        profileImage: 'src/assets/resources/images/Avatar4.webp',
        totalSpent: {
            value: 824,
            currency: 'usd',
        },
    },
    {
        consumerId: 'CM100005',
        name: 'Daniel Lee',
        email: 'daniel.lee@example.com',
        profileImage: 'src/assets/resources/images/Avatar5.webp',
        totalSpent: {
            value: 238,
            currency: 'usd',
        },
    },
    {
        consumerId: 'CM100006',
        name: 'Emily Carter',
        email: 'emily.carter@example.com',
        profileImage: 'src/assets/resources/images/Avatar6.webp',
        totalSpent: {
            value: 701,
            currency: 'usd',
        },
    },
];

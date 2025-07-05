/* Type checking for Consumer object */
import { Amount } from './Amount';

export interface Consumer {
    consumerId: string;
    name: string;
    email: string;
    profileImage: string;
    totalSpent: Amount;
}

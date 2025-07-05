/* Type checking for Transaction object */
import { Amount } from './Amount';
import { Consumer } from './Consumer';

type Status = 'completed' | 'inProgress' | 'cancelled';

export interface Transaction {
    transactionId: string;
    consumer: Consumer;
    totalAmount: Amount;
    status: Status;
    date: number;
}

import { Context, createContext } from 'react';

import { consumers } from 'mock/ConsumerData';
import { Consumer } from 'types/Consumer';

export const UserContext: Context<Consumer> = createContext(consumers[0]);

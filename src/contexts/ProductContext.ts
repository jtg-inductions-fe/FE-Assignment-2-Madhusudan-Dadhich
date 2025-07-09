import { Context, createContext } from 'react';

import { productData } from 'mock/ProductData';
import { Product } from 'types/Product';

export const ProductContext: Context<Product[]> = createContext(productData);

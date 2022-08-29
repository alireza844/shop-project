import React, { useContext } from 'react';

import { ProductsContext } from '../context/ProductsContextProvider'
import Product from './shared/Product';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div className="flex flex-wrap gap-16 justify-evenly">
            {
                products.map(product => <Product key={product.id} productData={product}/>)
            }
        </div>
    );
};

export default Store;
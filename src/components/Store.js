import React, { useContext } from 'react';

import { ProductsContext } from '../context/ProductsContextProvider'
import Product from './shared/Product';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div style={{display: "flex", gap: "50px", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center"}}>
            {
                products.map(product => <Product key={product.id} productData={product}/>)
            }
            {
                console.log(products[0])
            }
        </div>
    );
};

export default Store;
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom'

//context
import { ProductsContext } from '../context/ProductsContextProvider';

const ProductDetails = () => {

    const params = useParams()
    const {id} = params
    const data = useContext(ProductsContext)
    const product = data[id - 1];
    const {image, description, title, price, category} = product

    return (
        <div>
            <img src={image} alt={title}/>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>category:</span>{category}</p>
                <div>
                    <span>{price}$</span>
                    <Link to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
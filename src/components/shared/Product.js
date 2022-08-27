import React from 'react';
import { Link } from 'react-router-dom'

//Functions
import { makeShorter } from '../../helpers/functions';

const Product = ({productData}) => {

    const { image, title, price, id } = productData

    return (
        <div>
            <img src={image} alt={title} style={{width: "200px"}}/>
            <h3>{makeShorter(title)}</h3>
            <p>{price}</p>
            <div>
                <Link to={`/products/${id}`}>Details</Link>
                <div>
                    <button>add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
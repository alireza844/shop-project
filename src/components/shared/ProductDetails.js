import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom'

//context
import { ProductsContext } from '../../context/ProductsContextProvider';

const ProductDetails = () => {

    const params = useParams()
    const {id} = params
    const data = useContext(ProductsContext)
    const product = data[id - 1];
    const {image, description, title, price, category} = product

    return (
        <div className="m-5">
            <div className="w-11/12 relative rounded-xl p-4 md:flex justify-evenly border-4 m-auto sm:flex-row">
                <img className=" w-72 m-10" src={image} alt={title}/>
                <div>
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <p className="mt-6">{description}</p>
                    <div className="flex items-center justify-between my-6 mx-1">
                        <p className=" font-bold text-xl">Category: {category}</p>
                        <span className="font-bold text-blue-600 text-4xl">{price}$</span>
                    </div>
                    <Link className="bottom-4 right-4 underline md:relative lg:absolute rounded-xl bg-blue-600 p-4 font-bold text-3xl text-white sm:text-center sm:block" to="/products">Back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

//Functions
import { makeShorter, isInCart, quantityCount } from '../../helpers/functions';

//context
import { CartContext } from '../../context/CardContextProvider'

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext)
    const { image, title, price, id } = productData

    return (
        <div className="w-72 bg-white border-2 rounded-md p-2 transition-all hover:shadow-xl">
            <div className="flex justify-center">
                <img src={image} alt={title} className="h-64"/>
            </div>
            <h3 className="font-bold text-xl m-1 text-center">{makeShorter(title)}</h3>
            <div className="flex m-3 justify-between items-center">
                <p className="text-blue-600 font-bold text-lg">{price}$</p>
                <Link className="text-blue-600 font-bold text-lg p-1 rounded-lg underline transition-all hover:bg-blue-600 hover:text-white" to={`/products/${id}`}>More Details...</Link>
            </div>
            <div className="m-2 p-2 rounded-lg text-white text-center bg-blue-600 flex justify-evenly items-center">
                {quantityCount(state, productData.id) > 1 && <button className="w-8 h-8 font-bold text-3xl text-center" onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>}
                {quantityCount(state, productData.id) === 1 && <button className="w-8 h-8 font-bold text-3xl text-center" onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}>🗑️</button>}
                {quantityCount(state, productData.id) > 0 && <span className="w-8 h-8 font-bold text-3xl text-center" >{quantityCount(state, productData.id)}</span> }
                {
                isInCart(state, productData.id)
                    ? <button className="w-8 h-8 font-bold text-3xl text-center"  onClick={() => dispatch({type:"INCREASE", payload: productData})}>+</button>
                    : <button className="text-lg font-semibold w-full" onClick={() => dispatch({type:"ADD_ITEM", payload: productData})}>Add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;
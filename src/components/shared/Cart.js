import React, { useContext } from 'react';

//context
import { CartContext } from '../../context/CardContextProvider';

//Functions
import { makeShorter } from '../../helpers/functions'

const Cart = (props) => {

    const {dispatch} = useContext(CartContext)

    const {image, title , price, quantity} = props.data

    return (
        <div className="flex justify-between border-2 rounded-xl sm:p-2 md:p-12 m-4 sm:flex-col md:flex-row">
            <div className="flex justify-center items-center">
                <img className="md:w-36 sm:w-1/2 md:mr-12" src={image} alt={title}/>
            </div>
            <div className="flex items-center justify-between sm:mr-24">
                <h3 className="w-24 sm:text-center font-bold text-xl">{makeShorter(title)}</h3>
                <p className="w-24 sm:text-center font-semibold text-lg">{price}$</p>
            </div>
            <div className='sm:w-11/12 h-0.5 bg-black my-6 m-auto opacity-20 rounded-3xl md:hidden'></div>
            <div className="flex w-48 justify-between items-center text-2xl font-bold m-auto">
                {
                    quantity > 1
                    ? <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button>
                    : <button className="text-red-600" onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}>remove</button>
                }
                <div  className="flex items-center justify-between">
                    <span>{quantity}</span>
                </div>
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;
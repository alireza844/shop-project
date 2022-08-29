import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from '../../context/CardContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
        <div className="p-4 bg-blue-300 w-full flex justify-between items-center mb-4 rounded-b-lg">
            <Link to="/products" className="font-bold text-2xl">Shop</Link>
            <div className="flex">
                <Link to="/cart" className="text-4xl relative">🛒</Link>
                <div className="absolute bg-blue-500 p-1 rounded-full h-6 w-6 flex justify-center items-center">
                    <span className="font-bold text-white">{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
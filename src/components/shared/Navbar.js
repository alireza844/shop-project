import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from '../../context/CardContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
        <div>
            <Link to="/products">Shop</Link>
            <div>
                <Link to="/cart">
                    <h1>🛒</h1>
                    <span>{state.itemsCounter}</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
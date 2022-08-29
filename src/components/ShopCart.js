import React, { useContext } from 'react';

//components
import Cart from './shared/Cart';

//context
import { CartContext } from '../context/CardContextProvider';
import { Link } from 'react-router-dom';

const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext)

    return (
        <div className="flex sm:flex-col md:flex-row justify-between w-11/12 m-auto">
            <div>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item} />)
                }
            </div>
            <div className="bg-blue-100 md:w-4/12 sm:w-11/12 m-auto p-2 rounded-lg">
                {
                    state.itemsCounter > 0 && <div>
                        <div className="flex w-11/12 justify-between m-auto">
                            <p className="m-4 text-xl font-bold">total Items: {state.itemsCounter}</p>
                            <p className="m-4 text-xl font-bold">total payments: {state.total}$</p>
                        </div>
                        <div className="flex w-11/12 justify-between m-auto">
                            <button className="p-2 m-4 text-xl font-bold rounded-xl bg-green-600 text-white" onClick={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
                            <button className="p-2 m-4 text-xl font-bold rounded-xl bg-red-600 text-white" onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                        </div>
                    </div>
                }
                {
                    state.ckeckout && <div className="flex flex-col justify-center items-center">
                        <h3 className="text-2xl mb-10">Checked out successfuly</h3>
                        <Link className="underline text-2xl text-white border p-2 bg-blue-600 rounded-xl transition-all hover:bg-black hover:scale-105" to="/products">Back to Shop</Link>
                    </div>
                }
                {
                    !state.ckeckout && state.total === 0 && <div className="flex flex-col justify-center items-center">
                        <h3 className="text-2xl mb-10">want to buy?</h3>
                        <Link className="underline text-2xl text-white border p-2 bg-blue-600 rounded-xl transition-all hover:bg-black hover:scale-105" to="/products">go to shop</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShopCart;
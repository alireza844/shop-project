import React, { useContext } from 'react';

//components
import Cart from './shared/Cart';

//context
import { CartContext } from '../context/CardContextProvider';
import { Link } from 'react-router-dom';

const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext)

    return (
        <div>
            <div>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item} />)
                }
            </div>
            <div>
                {
                    state.itemsCounter > 0 && <div>
                        <p>total Items: {state.itemCounter}</p>
                        <p>total payments: {state.total}</p>
                        <div>
                            <button onClick={() => dispatch({type: "CHECKOUT"})}>Checkout</button>
                            <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                        </div>
                    </div>
                }
                {
                    state.ckeckout && <div>
                        <h3>Checked out successfuly</h3>
                        <Link to="/products">Buy more</Link>
                    </div>
                }
                {
                    !state.ckeckout && state.total === 0 && <div>
                        <h3>want to buy?</h3>
                        <Link to="/products">go to shop</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShopCart;
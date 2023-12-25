import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext';

export const CartItem = (props) => {
    const { id, giaBan, tenSanPham, imgsource } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <div className='cartItem'>

            <img src={imgsource} />
            <div className="description">
                <p>
                    <b>{tenSanPham}</b>
                </p>
                <p>{giaBan}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(e.target.value, id)} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>

        </div>
    )
}

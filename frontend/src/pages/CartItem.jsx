import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext';

export const CartItem = (props) => {
    const { sanPhamID, gia, soLuong, ten, imgsource } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    return (
        <div className='cartItem'>

            <img src={imgsource} />
            <div className="description">
                <p>
                    <b>{ten}</b>
                </p>
                <p>{gia}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(sanPhamID)}> - </button>
                    <input value={cartItems[sanPhamID]} onChange={(e) => updateCartItemCount(e.target.value, sanPhamID)} />
                    <button onClick={() => addToCart(sanPhamID)}> + </button>
                </div>
            </div>

        </div>
    )
}

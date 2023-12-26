import React, { useContext } from 'react';
import { ShopContext } from '../contexts/ShopContext';

export const CartItem = (props) => {
    const { id, giaBan, tenSanPham, imgsource } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    return (
        <div className='my-cartItem'> {/* Updated className */}

            <img src={imgsource} />
            <div className="my-description"> {/* Updated className */}
                <p>
                    <b>{tenSanPham}</b>
                </p>
                <p>Giá: {giaBan}VNĐ</p>
                <div className="my-countHandler"> {/* Updated className */}
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(e.target.value, id)} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>

        </div>
    );
}

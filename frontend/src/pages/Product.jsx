import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext';
const Product = (props) => {
    const { id, giaBan, soLuongKho, tenSanPham, imgsource } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[id];
    return (
        <div className="product">
            <img src={imgsource} />
            <div className="description">
                <p>
                    <b>{tenSanPham}</b>
                </p>
                <p>{giaBan + " VND"}</p>
                <p>{"Còn lại: " + soLuongKho}</p>
                <button className='addToCartBttn' onClick={() => addToCart(id)}>Thêm vào giỏ hàng {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
            </div>
        </div>
    )
}

export default Product
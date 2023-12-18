import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext';
const Product = (props) => {
    const { sanPhamID, gia, soLuong, ten, imgsource } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemCount = cartItems[sanPhamID];
    return (
        <div className="product">
            <img src={imgsource} />
            <div className="description">
                <p>
                    <b>{ten}</b>
                </p>
                <p>{gia + " VND"}</p>
                <p>{"Còn lại: " + soLuong}</p>
                <button className='addToCartBttn' onClick={() => addToCart(sanPhamID)}>Thêm vào giỏ hàng {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
            </div>
        </div>
    )
}

export default Product
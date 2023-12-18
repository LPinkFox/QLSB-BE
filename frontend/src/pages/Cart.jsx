import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Products } from '../Products'
import { ShopContext } from '../contexts/ShopContext'
import { CartItem } from './CartItem'
import "./cart.css"
const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    return (
        <>
            <Navbar />
            <div className='cart'>

                <div>
                    <h1>Giỏ Hàng</h1>
                    <div className="cartItems">
                        {Products.map((Product) => {
                            if (cartItems[Product.sanPhamID] !== 0) {
                                return <CartItem data={Product} />
                            }
                        })}
                    </div>
                    <div className="checkout">
                        <p>Subtotal:{getTotalCartAmount()} VND</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Cart
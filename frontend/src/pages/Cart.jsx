import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Products from '../Products'
import { ShopContext } from '../contexts/ShopContext'
import { RentContext } from '../contexts/RentContext'
import { CartItem } from './CartItem'
import { YardItem } from './YardItem'
import "./cart.css"
const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const { rentedYard, setRentedYard, getTotalAmountYard } = useContext(RentContext);
    return (
        <>
            <Navbar />
            <div className='cart'>

                <div>
                    <h1>Giỏ Hàng</h1>
                    <div className="cartItems">
                        {Products.map((Product) => {
                            if (cartItems[Product.id] !== 0) {
                                return <CartItem data={Product} />
                            }
                        })}
                    </div>
                    <div className="yardItems">
                        {rentedYard.map((yard) => {
                            return <YardItem data={yard} />
                        })}
                    </div>
                    <div className="checkout">
                        <p>Subtotal:{getTotalCartAmount() + getTotalAmountYard()} VND</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Cart
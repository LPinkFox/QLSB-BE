import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Products from '../Products';
import { ShopContext } from '../contexts/ShopContext';
import { RentContext } from '../contexts/RentContext';
import { CartItem } from './CartItem';
import { YardItem } from './YardItem';
import "./cart.css"; // Updated CSS file name

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const { rentedYard, setRentedYard, getTotalAmountYard } = useContext(RentContext);

    return (
        <>
            <Navbar />
            <div className='my-cart'> {/* Updated className */}
                <div>
                    <h1>Giỏ Hàng</h1>
                    <div className="my-cartItems"> {/* Updated className */}
                        {Products.map((Product) => {
                            if (cartItems[Product.id] !== 0) {
                                return <CartItem data={Product} />
                            }
                        })}
                    </div>
                    <div className="my-yardItems"> {/* Updated className */}
                        {rentedYard.map((yard) => {
                            return <YardItem data={yard} />
                        })}
                    </div>
                    <div className="my-checkout"> {/* Updated className */}
                        <p>Subtotal:{getTotalCartAmount() + getTotalAmountYard()} VND</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;

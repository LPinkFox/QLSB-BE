import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Products from '../Products';
import { ShopContext } from '../contexts/ShopContext';
import { UserContext } from '../contexts/UserContext';
import { RentContext } from '../contexts/RentContext';
import { CartItem } from './CartItem';
import { YardItem } from './YardItem';
import "./cart.css"; // Updated CSS file name
const formatDate = (dateString) => {
    const [month, day, year] = dateString.split('/');
    const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    return isNaN(new Date(formattedDate).getTime()) ? "Invalid Date" : formattedDate;
};
const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const { rentedYard, getTotalAmountYard } = useContext(RentContext);
    const { user } = useContext(UserContext);
    console.log('cart');
    console.log(cartItems);
    const dataToSend = {
        donHangSanPham: Object.keys(cartItems)
            .filter(id => cartItems[id] > 0) // Only include products with quantity > 0
            .map(id => ({
                id: parseInt(id),
                soLuongMua: cartItems[id],
            })),
        donHangSanBong: rentedYard.map(yard => ({
            id: yard.id,
            kip: yard.kip,
            ngay: formatDate(yard.date),
        })),
    };
    console.log('Data to send:', JSON.stringify(dataToSend, null, 2));
    const handlepay = () => {
        const userId = user.id;

        fetch(`http://localhost:8080/api/nguoidung/donhang/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text(); // Handle the response as text
            })
            .then(responseText => {
                console.log('Response from server:', responseText);
                // Check if the responseText contains the success message
                if (responseText === 'Nhập dữ liệu thành công') {

                    // Handle success here, e.g., show a success message to the user
                    alert('Đơn hàng đã được gửi thành công!');
                } else {
                    // Handle unexpected response
                    console.error('Unexpected response:', responseText);
                }
            })
            .catch(error => {
                console.error('Lỗi khi gửi đơn hàng:', error);
                // Handle errors
                alert('Lỗi');
            });
    };
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
                        <p>Tổng tiền:{getTotalCartAmount() + getTotalAmountYard()} VND</p>
                        <button onClick={() => {
                            handlepay();
                        }}>Thanh Toán</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;

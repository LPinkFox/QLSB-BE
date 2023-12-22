import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./navbar.css"
export const navbar = () => {
    return (
        <div className="navbar">
            <div className="name"></div>
            <Link to="/cart">
                <ShoppingCart size={32} />
            </Link>
            <div className="option">Đặt sân</div>
            <div className="option">Mua hàng</div>
        </div>
    )
}

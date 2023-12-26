import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { ShoppingCart, User } from "phosphor-react"
import { UserContext } from "../contexts/UserContext"
import "./Navbar.css"
const Navbar = () => {
    const { user } = useContext(UserContext);
    return (
        <nav>
            <div className='username'>Sân Bóng Bách Khoa</div>
            <ul>
                <li>
                    <NavLink to="/shop">SHOP</NavLink>
                </li>
                <li>
                    <NavLink to="/rent">RENT</NavLink>
                </li>
                <li>
                    <NavLink to={'/cart'}>
                        <ShoppingCart size={28} />
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        <User size={32} weight="thin" />
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar
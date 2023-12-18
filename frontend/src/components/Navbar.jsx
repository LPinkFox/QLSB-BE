import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import { UserContext } from "../contexts/UserContext"
import "./Navbar.css"
const Navbar = () => {
    const { user } = useContext(UserContext);
    return (
        <nav>
            <div className='username'>{user.hoTen}</div>
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
            </ul>
        </nav>

    )
}

export default Navbar
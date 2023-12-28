import React, { useContext, useState } from 'react'
import { NavLink } from "react-router-dom"
import { ShoppingCart, User, UserGear, SignOut } from "phosphor-react"
import { UserContext } from "../contexts/UserContext"
import "./Navbar.css"
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user } = useContext(UserContext);
    return (
        <nav>
            <div className='my-username'>Sân Bóng Bách Khoa</div>
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
                    <User className='my-user-icon' size={32} weight="thin" onClick={() => { setOpen(!open) }} />
                </li>
                <div className={`my-sub-menu-wrap ${open ? 'active' : 'inactive'}`}>
                    <div className="my-sub-menu">
                        <div className="my-user-info">
                            <h3>{user.hoTen}<br /><span>user</span></h3>
                        </div>
                        <hr />
                        <div className="my-sub-menu-link">
                            <NavLink className={'lp'}>
                                <UserGear size={32} weight="thin" />
                                <h3>Thông tin người dùng</h3>
                            </NavLink>
                            <span></span>
                        </div>
                        <div className="my-sub-menu-link">
                            <NavLink className={'lp'}>
                                <SignOut size={32} weight="thin" />
                                <h3>Đăng xuất</h3>
                            </NavLink>
                            <span></span>
                        </div>

                    </div>

                </div>

            </ul>
        </nav>

    )
}

export default Navbar
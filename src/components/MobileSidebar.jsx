import React from 'react'
import { NavLink } from 'react-router-dom'

import { ReactComponent as ResetSvg } from '../assets/icons/reset.svg'


export const MobileSidebar = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="top">
                <button className="exit" onClick={()=>setIsOpen(false)}>
                    <ResetSvg />
                </button>
            </div>
            <ul className="menu-list">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/faq">Faq</NavLink>
                </li>
            </ul>
        </div>
    )
}

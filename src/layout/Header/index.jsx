import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { ReactComponent as LogoSvg } from '../../assets/icons/logo.svg'
import { ReactComponent as WishlistSvg } from '../../assets/icons/wishlist.svg'
import { ReactComponent as CartSvg } from '../../assets/icons/cart.svg'
import { ReactComponent as UserSvg } from '../../assets/icons/user.svg'
import { ReactComponent as MenuSvg } from '../../assets/icons/menu.svg'
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg'
import { ReactComponent as ResetSvg } from '../../assets/icons/reset.svg'

export const Header = () => {

  const [isSticky, setIsSticky] = useState(false);
  const { pathname } = useLocation(); // Get current location from React Router
  const isHomePage = pathname === '/'; // Check if it's the home page


  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(isHomePage && window.scrollY > 250)
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage])


  const headerClassName = isSticky ? 'site-header sticky' : (isHomePage? 'site-header':'site-header sticky');


  return (
    <header className={headerClassName}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 header-logo">
            <NavLink to="/">
              <LogoSvg />
            </NavLink>
          </div>
          <nav className="col-xl-6 col-lg-7 header-nav">
            <ul className="d-flex justify-content-end align-items-center gap-5">
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
          </nav>
          <div className="col-xl-5 col-lg-4 col-md-11 col-sm-11 col-11 header-actions">
            <div className="search col-xl-5 col-lg-5 col-md-5 col-6">
              <button className="d-flex align-items-center gap-2">
                <SearchSvg />
                Search
              </button>
            </div>
            <div className="wishlist">
              <NavLink to="/wishlist">
                <WishlistSvg />
              </NavLink>
            </div>
            <div className="cart">
              <NavLink to="/cart">
                <CartSvg />
              </NavLink>
            </div>
            <div className="user">
              <NavLink to="/signin">
                <UserSvg />
              </NavLink>
            </div>
            <div className="hamburger">
              <MenuSvg />
            </div>
          </div>
          <div className="sidebar">
            <div className="top">
              <button className="exit">
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
        </div>
      </div>
    </header>

  )
}

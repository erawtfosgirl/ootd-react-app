import React, { useEffect, useState } from 'react'
import { ReactComponent as LogoSvg } from '../../assets/icons/logo.svg'
import { ReactComponent as WishlistSvg } from '../../assets/icons/wishlist.svg'
import { ReactComponent as CartSvg } from '../../assets/icons/cart.svg'
import { ReactComponent as UserSvg } from '../../assets/icons/user.svg'
import { ReactComponent as MenuSvg } from '../../assets/icons/menu.svg'
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg'
import { ReactComponent as ResetSvg } from '../../assets/icons/reset.svg'

export const Header = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsSticky(true)
      }
      else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  const headerClassName = isSticky ? 'site-header sticky' : 'site-header';

  return (
    <header className={headerClassName}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1 header-logo">
            <a href="index.html">
              <LogoSvg />
            </a>
          </div>
          <nav className="col-xl-6 col-lg-7 header-nav">
            <ul className="d-flex justify-content-end align-items-center gap-5">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="shop.html">Shop</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="faq.html">FAQ</a>
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
              <a href="wishlist.html">
                <WishlistSvg />
              </a>
            </div>
            <div className="cart">
              <a href="cart.html">
                <CartSvg />
              </a>
            </div>
            <div className="user">
              <a href="login.html">
                <UserSvg />
              </a>
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
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="shop.html">Shop</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="cart.html">Cart</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="faq.html">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

  )
}

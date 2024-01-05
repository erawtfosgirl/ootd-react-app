import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { ReactComponent as LogoSvg } from '../../assets/icons/logo.svg'
import { ReactComponent as WishlistSvg } from '../../assets/icons/wishlist.svg'
import { ReactComponent as CartSvg } from '../../assets/icons/cart.svg'
import { ReactComponent as UserSvg } from '../../assets/icons/user.svg'
import { ReactComponent as MenuSvg } from '../../assets/icons/menu.svg'
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg'

import { MobileSidebar } from '../../components/MobileSidebar'
import { Search } from '../../components/Search'
import { useSelector } from 'react-redux'


export const Header = () => {
  const [isStickyHeader, setIsStickyHeader] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSearchAreaOpen, setIsSearchAreaOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false); // State to manage input focus
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const { pathname } = useLocation(); // Get current location from React Router
  const isHomePage = pathname === '/'; // Check if it's the home page

  const basket = useSelector(state => state.basket);

  const openSearch = () => {
    setIsSearchAreaOpen(true)
    setTimeout(() => {
      setIsInputFocused(true)
    }, 200);
  };

  const closeSearch = () => {
    setIsSearchAreaOpen(false)
    setIsInputFocused(false)
  };

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  }

  const closeDropdown = () => {
    setIsOpenDropdown(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsStickyHeader(isHomePage && window.scrollY > 250)
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isHomePage])


  const headerClassName = isStickyHeader ? 'site-header sticky' : (isHomePage ? 'site-header' : 'site-header sticky');

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
              <button className="d-flex align-items-center gap-2 search-btn" onClick={openSearch}>
                <SearchSvg />
                Search
              </button>
              <Search
                isSearchAreaOpen={isSearchAreaOpen}
                closeSearch={closeSearch}
                isInputFocused={isInputFocused}
              />
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
              {basket.length > 0 && <span className='cart-count'>{basket.length}</span>}
            </div>
            <div className="user" onClick={toggleDropdown} ref={dropdownRef}>
              <UserSvg />
              <ul className={`dropdown ${isOpenDropdown ? 'active-dropdown' : ''}`}>
                {true ? (
                  <>
                    <li>
                      <NavLink to="/profile">
                        My profile
                      </NavLink>
                    </li>
                    <li>Log out</li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/signin">
                        Sign in
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/signup">
                        Create an account
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>

            </div>
            <div className="hamburger" onClick={() => setIsMobileSidebarOpen(true)}>
              <MenuSvg />
            </div>
          </div>
          <MobileSidebar
            isMobileSidebarOpen={isMobileSidebarOpen}
            setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          />
        </div>
      </div>
    </header>

  )
}

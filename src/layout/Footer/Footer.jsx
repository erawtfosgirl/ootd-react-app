import React from 'react'
import { ReactComponent as LogoSvg } from '../../assets/icons/logo.svg'

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row footer-top">
          <div className="col-lg-3">
            <a href="">
              <LogoSvg />
            </a>
          </div>
          <div className="col-lg-3">
            <h5>Help</h5>
            <ul className="menu">
              <li>
                <a href="#">Exchanges Returns</a>
              </li>
              <li>
                <a href="#">Payment Information</a>
              </li>
              <li>
                <a href="#">Track Your Order</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Business</h5>
            <ul className="menu">
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="#">Pop-up Store</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h5>Follow Us</h5>
            <ul className="social-menu">
              <li className="social-links">
                <a href="#facebook">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </li>
              <li className="social-links">
                <a href="#twitter">
                  <i className="fa-brands fa-x-twitter" />
                </a>
              </li>
              <li className="social-links">
                <a href="#instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
              </li>
              <li className="social-links">
                <a href="#linkedin">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center footer-bottom">
        <p>Copyright © 2023. All rights reserved.</p>
      </div>
    </footer>

  )
}

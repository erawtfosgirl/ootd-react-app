import React from 'react'
import { NavLink } from 'react-router-dom'

export const ProductItem = ({ id, name, thumbnail, price, discountPercentage }) => {
    let discountedPrice;
    if (discountPercentage > 0) {
        discountedPrice = price - price * discountPercentage * 0.01;
    }
    return (
        <div className="col-lg-3 col-md-4 col-6 product-item">
            <div className="product-image">
                <NavLink to={`/product/${id}`}>
                    <img
                        className="img-fluid"
                        src={thumbnail}
                        alt="Image"
                    />
                </NavLink>
                <button className="wishlist action-box">
                    <i className="fa-regular fa-heart regular-icon" />
                    <i className="fa-solid fa-heart hidden solid-icon" />
                </button>
                {discountPercentage > 0 && <span className="discount-box">-{discountPercentage}%</span>}
                <button
                    type="button"
                    className="col-xl-7 col-lg-7 col-md-7 col-7 addtocart"
                >
                    Add to cart
                </button>
            </div>
            <div className="product-details mt-2">
                <h5 className="product-name">
                    <NavLink to={`/product/${id}`}>{name}</NavLink>
                </h5>
                <div className="product-price d-flex align-items-center justify-content-center gap-2">
                    {discountedPrice ? (
                        <>
                            <div className="price-regular">{discountedPrice} $</div>
                            <div className="price-old">
                                <del>{price} $</del>
                            </div>
                        </>
                    ) : (
                        <div className="price-regular">{price} $</div>
                    )}
                </div>
            </div>
        </div>
    )
}

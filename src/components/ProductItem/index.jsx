import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { addToBasket } from '../../redux/reducers/basketSlice';

export const ProductItem = ({ id, name, thumbnail, price, discountPercentage }) => {
    const discountedPrice = discountPercentage > 0 ? price - (price * discountPercentage * 0.01) : null;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const newItem = {
            id,
            name,
            thumbnail,
            price,
            quantity: 0 // default quantity for a new item
        }
        dispatch(addToBasket(newItem));
        console.log("product added");
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
                    onClick={handleAddToCart}
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
                            <div className="price-regular">{`${discountedPrice.toFixed(2)} $`}</div>
                            <div className="price-old">
                                <del>{`${price.toFixed(2)} $`}</del>
                            </div>
                        </>
                    ) : (
                        <div className="price-regular">{`${price.toFixed(2)} $`}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

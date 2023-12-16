import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const SearchItem = ({ id, thumbnail, name, discountPercentage, price, closeSearch }) => {
    const discountedPrice = discountPercentage > 0 ? price - (price * discountPercentage * 0.01) : null;
    const navigate = useNavigate();

    const handleProductClick = () => {
        closeSearch(); // Close the search area
        navigate(`/product/${id}`); // Navigate to product detail page
    };

    return (
        <div className="col-12 search-item d-flex align-items-center gap-3">
            <div className="col-2">
                <NavLink to={`/product/${id}`}>
                    <img
                        className="img-fluid "
                        src={thumbnail}
                        alt="Image"
                        onClick={handleProductClick} // Close search when the image is clicked
                    />
                </NavLink>
            </div>
            <div className="product-details">
                <h5 className="product-name ">
                    <NavLink to={`/product/${id}`} onClick={handleProductClick}>{name}</NavLink>
                </h5>
                <div className="product-price d-flex align-items-center gap-2">
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

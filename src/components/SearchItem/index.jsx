import React from 'react'
import { NavLink } from 'react-router-dom'

export const SearchItem = ({ id, image, name, discountPercentage, discountedPrice, regularPrice }) => {
    return (
        <div className="col-12 search-item d-flex align-items-center gap-3">
            <div className="col-2">
                <NavLink to={`/product/${id}`}>
                    <img
                        className="img-fluid "
                        src={image}
                        alt="Image"
                    />
                </NavLink>
            </div>
            <div className="product-details">
                <h5 className="product-name ">
                    <a href="#product">{name}</a>
                </h5>
                <div className="product-price d-flex align-items-center gap-2">
                    {discountPercentage > 0 ? (
                        <>
                            <div className="price-regular">{discountedPrice} $</div>
                            <div className="price-old">
                                <del>{regularPrice} $</del>
                            </div>
                        </>
                    ) : (
                        <div className="price-regular">{regularPrice} $</div>
                    )}
                </div>
            </div>
        </div>
    )
}

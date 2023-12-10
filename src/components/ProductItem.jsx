import React from 'react'

export const ProductItem = ({name,image}) => {
    return (
        <div className="col-lg-3 col-md-4 col-6 product-item">
            <div className="product-image">
                <a href="product.html">
                    <img
                        className="img-fluid"
                        src={image}
                        alt="Image"
                    />
                </a>
                <button className="wishlist action-box">
                    <i className="fa-regular fa-heart regular-icon" />
                    <i className="fa-solid fa-heart hidden solid-icon" />
                </button>
                <span className="discount-box">-20%</span>
                <button
                    type="button"
                    className="col-xl-7 col-lg-7 col-md-7 col-7 addtocart"
                >
                    Add to cart
                </button>
            </div>
            <div className="product-details mt-2">
                <h5 className="product-name">
                    <a href="#">{name}</a>
                </h5>
                <div className="product-price d-flex align-items-center justify-content-center gap-2">
                    <div className="price-regular">55 $</div>
                    <div className="price-old">
                        <del> 70 $</del>
                    </div>
                </div>
            </div>
        </div>
    )
}

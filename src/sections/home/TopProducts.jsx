import React from 'react'

import Product1 from '../../assets/images/products/dress1_3.jpg'

export const TopProducts = () => {
    return (
        <section className="products-section mt-5">
            <div className="container">
                <div className="title mb-4 text-center">
                    <h2>Trending</h2>
                    <div className="txt">Top view in this week</div>
                </div>
                <div className="row g-3">
                    <div className="col-lg-3 col-md-4 col-6 product-item">
                        <div className="product-image">
                            <a href="product.html">
                                <img
                                    className="img-fluid"
                                    src={Product1}
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
                                <a href="#">Shoulder bag with flap</a>
                            </h5>
                            <div className="product-price d-flex align-items-center justify-content-center gap-2">
                                <div className="price-regular">55 $</div>
                                <div className="price-old">
                                    <del> 70 $</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 product-item">
                        <div className="product-image">
                            <a href="product.html">
                                <img
                                    className="img-fluid"
                                    src={Product1}
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
                                <a href="#">Shoulder bag with flap</a>
                            </h5>
                            <div className="product-price d-flex align-items-center justify-content-center gap-2">
                                <div className="price-regular">55 $</div>
                                <div className="price-old">
                                    <del> 70 $</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 product-item">
                        <div className="product-image">
                            <a href="product.html">
                                <img
                                    className="img-fluid"
                                    src={Product1}
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
                                <a href="#">Shoulder bag with flap</a>
                            </h5>
                            <div className="product-price d-flex align-items-center justify-content-center gap-2">
                                <div className="price-regular">55 $</div>
                                <div className="price-old">
                                    <del> 70 $</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 product-item">
                        <div className="product-image">
                            <a href="product.html">
                                <img
                                    className="img-fluid"
                                    src={Product1}
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
                                <a href="#">Shoulder bag with flap</a>
                            </h5>
                            <div className="product-price d-flex align-items-center justify-content-center gap-2">
                                <div className="price-regular">55 $</div>
                                <div className="price-old">
                                    <del> 70 $</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

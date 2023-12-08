import React from 'react'

import Product1 from '../../assets/images/products/dress1_3.jpg'
import { ReactComponent as ResetSvg } from '../../assets/icons/reset.svg'

export const ShopProduct = () => {
    return (
        <section className="shop-products-section my-5">
            <div className="container">
                <div className="title mb-4 d-flex justify-content-between align-items-center">
                    <button className="shopfilter-btn">
                        <i className="fa-solid fa-bars" />
                    </button>
                    <select
                        className="form-select options"
                        aria-label="Default select example"
                    >
                        <option selected="" value={1}>
                            Sort by Position
                        </option>
                        <option value={2}>Sort by Price</option>
                        <option value={3}>Sort by Product Name</option>
                    </select>
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
            <div className="overlay" />
            <div className="filter-menu">
                <div className="filter-container">
                    <div className="closefiltermenu text-end">
                        <ResetSvg />
                    </div>
                    <div className="filter-options d-flex flex-column gap-4">
                        <div className="filter-option-item">
                            <h5 className="filter-options-title">Category</h5>
                            <div className="filter-options-content">
                                <ul className="items">
                                    <li className="item">
                                        <a href="#">Skirts</a>
                                    </li>
                                    <li className="item">
                                        <a href="#">Blazer</a>
                                    </li>
                                    <li className="item">
                                        <a href="#">Dress</a>
                                    </li>
                                    <li className="item">
                                        <a href="#">Shoes</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-option-item">
                            <h5 className="filter-options-title">Price</h5>
                            <div className="filter-options-content">
                                <div className="price-input">
                                    <div className="field">
                                        <span>Min</span>
                                        <input
                                            type="number"
                                            className="input-min"
                                            defaultValue={2500}
                                        />
                                    </div>
                                    <div className="separator">-</div>
                                    <div className="field">
                                        <span>Max</span>
                                        <input
                                            type="number"
                                            className="input-max"
                                            defaultValue={7500}
                                        />
                                    </div>
                                </div>
                                <div className="slider">
                                    <div className="progress" />
                                </div>
                                <div className="range-input">
                                    <input
                                        type="range"
                                        className="range-min"
                                        min={0}
                                        max={10000}
                                        defaultValue={2500}
                                        step={100}
                                    />
                                    <input
                                        type="range"
                                        className="range-max"
                                        min={0}
                                        max={10000}
                                        defaultValue={7500}
                                        step={100}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="filter-option-item">
                            <h5 className="filter-options-title">Color</h5>
                            <div className="filter-options-content">
                                <div className="filter-colors">
                                    <div className="color-item">
                                        <a href="#">
                                            <div
                                                className="color-option"
                                                style={{ backgroundColor: "aqua" }}
                                            />
                                        </a>
                                    </div>
                                    <div className="color-item">
                                        <a href="#">
                                            <div
                                                className="color-option"
                                                style={{ backgroundColor: "rgb(204, 255, 0)" }}
                                            />
                                        </a>
                                    </div>
                                    <div className="color-item">
                                        <a href="#">
                                            <div
                                                className="color-option"
                                                style={{ backgroundColor: "rgb(186, 60, 165)" }}
                                            ></div>
                                        </a>
                                    </div>
                                    <div className="color-item">
                                        <a href="#">
                                            <div
                                                className="color-option"
                                                style={{ backgroundColor: "rgb(130, 135, 135)" }}
                                            ></div>
                                        </a>
                                    </div>
                                    <div className="color-item">
                                        <a href="#">
                                            <div
                                                className="color-option"
                                                style={{ backgroundColor: "rgb(0, 0, 0)" }}
                                            />
                                        </a>
                                    </div>
                                    <div className="color-item">
                                        <a href="#">
                                            <div
                                                className="color-option"
                                                style={{ backgroundColor: "rgb(123, 198, 85)" }}
                                            ></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-option-item">
                            <h5 className="filter-options-title">Size</h5>
                            <div className="filter-options-content">
                                <div className="filter-sizes">
                                    <div className="size-item">
                                        <a href="#">
                                            <div className="size-option">XS</div>
                                        </a>
                                    </div>
                                    <div className="size-item">
                                        <a href="#">
                                            <div className="size-option">S</div>
                                        </a>
                                    </div>
                                    <div className="size-item">
                                        <a href="#">
                                            <div className="size-option">M</div>
                                        </a>
                                    </div>
                                    <div className="size-item">
                                        <a href="#">
                                            <div className="size-option">L</div>
                                        </a>
                                    </div>
                                    <div className="size-item">
                                        <a href="#">
                                            <div className="size-option">XL</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

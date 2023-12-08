import React from 'react'

import Product1 from '../../assets/images/products/dress1_3.jpg'

export const CartProduct = () => {
    return (
        <section className="cart-products-section">
            <div className="container">
                <div className="title col-lg-8 col-12 mb-4 d-flex justify-content-between align-items-center">
                    <h2>My Shopping Cart</h2>
                    <button type="button">Remove All</button>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-start">
                    <div className="left col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="cart-item col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="cart-image col-lg-2 col-md-2 col-sm-3 col-4">
                                <a href="product.html">
                                    <img
                                        className="img-fluid"
                                        src={Product1}
                                        alt="Image"
                                    />
                                </a>
                            </div>
                            <div className="cart-detail col-lg-10 col-md-10 col-sm-9 col-8 d-flex flex-column gap-2 px-3">
                                <div className="top d-flex justify-content-between">
                                    <h5>Shoulder bag with flap</h5>
                                    <span className="total">55$</span>
                                </div>
                                <div className="middle d-flex flex-column gap-2">
                                    <div>
                                        <span>Size:</span>
                                        <span>S</span>
                                    </div>
                                    <div>
                                        <span>Color:</span>
                                        <span>Black</span>
                                    </div>
                                    <div>
                                        <span>Price:</span>
                                        <span>55 $</span>
                                    </div>
                                </div>
                                <div className="bottom d-flex justify-content-between align-items-center">
                                    <div className="product-quantity col-lg-2 col-md-2 col-sm-3 col-5">
                                        <button className="decrease">
                                            <i className="fa-solid fa-minus" />
                                        </button>
                                        <input type="text" defaultValue={1} />
                                        <button className="increase">
                                            <i className="fa-solid fa-plus" />
                                        </button>
                                    </div>
                                    <div className="product-action d-flex align-items-center gap-3">
                                        <button className="addtowishlist">
                                            <i className="fa-regular fa-heart" />
                                        </button>
                                        <button className="removefromlist">
                                            <i className="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="cart-image col-lg-2 col-md-2 col-sm-3 col-4">
                                <a href="product.html">
                                    <img
                                        className="img-fluid"
                                        src={Product1}
                                        alt="Image"
                                    />
                                </a>
                            </div>
                            <div className="cart-detail col-lg-10 col-md-10 col-sm-9 col-8 d-flex flex-column gap-2 px-3">
                                <div className="top d-flex justify-content-between">
                                    <h5>Shoulder bag with flap</h5>
                                    <span className="total">55$</span>
                                </div>
                                <div className="middle d-flex flex-column gap-2">
                                    <div>
                                        <span>Size:</span>
                                        <span>S</span>
                                    </div>
                                    <div>
                                        <span>Color:</span>
                                        <span>Black</span>
                                    </div>
                                    <div>
                                        <span>Price:</span>
                                        <span>55 $</span>
                                    </div>
                                </div>
                                <div className="bottom d-flex justify-content-between align-items-center">
                                    <div className="product-quantity col-lg-2 col-md-2 col-sm-3 col-5">
                                        <button className="decrease">
                                            <i className="fa-solid fa-minus" />
                                        </button>
                                        <input type="text" defaultValue={1} />
                                        <button className="increase">
                                            <i className="fa-solid fa-plus" />
                                        </button>
                                    </div>
                                    <div className="product-action d-flex align-items-center gap-3">
                                        <button className="addtowishlist">
                                            <i className="fa-regular fa-heart" />
                                        </button>
                                        <button className="removefromlist">
                                            <i className="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                            <div className="cart-image col-lg-2 col-md-2 col-sm-3 col-4">
                                <a href="product.html">
                                    <img
                                        className="img-fluid"
                                        src={Product1}
                                        alt="Image"
                                    />
                                </a>
                            </div>
                            <div className="cart-detail col-lg-10 col-md-10 col-sm-9 col-8 d-flex flex-column gap-2 px-3">
                                <div className="top d-flex justify-content-between">
                                    <h5>Shoulder bag with flap</h5>
                                    <span className="total">55$</span>
                                </div>
                                <div className="middle d-flex flex-column gap-2">
                                    <div>
                                        <span>Size:</span>
                                        <span>S</span>
                                    </div>
                                    <div>
                                        <span>Color:</span>
                                        <span>Black</span>
                                    </div>
                                    <div>
                                        <span>Price:</span>
                                        <span>55 $</span>
                                    </div>
                                </div>
                                <div className="bottom d-flex justify-content-between align-items-center">
                                    <div className="product-quantity col-lg-2 col-md-2 col-sm-3 col-5">
                                        <button className="decrease">
                                            <i className="fa-solid fa-minus" />
                                        </button>
                                        <input type="text" defaultValue={1} />
                                        <button className="increase">
                                            <i className="fa-solid fa-plus" />
                                        </button>
                                    </div>
                                    <div className="product-action d-flex align-items-center gap-3">
                                        <button className="addtowishlist">
                                            <i className="fa-regular fa-heart" />
                                        </button>
                                        <button className="removefromlist">
                                            <i className="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right col-lg-4 col-md-12 col-sm-12 col-12 ps-lg-3 mt-lg-0 mt-md-5 mt-sm-5 mt-5">
                        <ul>
                            <li>
                                <span>Subtotal :</span>
                                <span>165 $</span>
                            </li>
                            <li>
                                <span>Delivery :</span>
                                <span>FREE</span>
                            </li>
                            <li>
                                <span>Total :</span>
                                <span>165 $</span>
                            </li>
                        </ul>
                        <a href="#" className="col-12">
                            Go to checkout
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

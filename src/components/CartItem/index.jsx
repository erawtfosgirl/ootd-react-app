import React from 'react'

export const CartItem = ({ thumbnail, name, quantity, price }) => {
    return (
        <div className="cart-item col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center">
            <div className="cart-image col-lg-2 col-md-2 col-sm-3 col-4">
                <a href="product.html">
                    <img
                        className="img-fluid"
                        src={thumbnail}
                        alt="Image"
                    />
                </a>
            </div>
            <div className="cart-detail col-lg-10 col-md-10 col-sm-9 col-8 d-flex flex-column gap-2 px-3">
                <div className="top d-flex justify-content-between">
                    <h5>{name}</h5>
                    <span className="total">{`${quantity*price}$`}</span>
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
                        <span>{`${price}$`}</span>
                    </div>
                </div>
                <div className="bottom d-flex justify-content-between align-items-center">
                    <div className="product-quantity col-lg-2 col-md-2 col-sm-3 col-5">
                        <button className="decrease">
                            <i className="fa-solid fa-minus" />
                        </button>
                        <input type="text" defaultValue={quantity} />
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
    )
}

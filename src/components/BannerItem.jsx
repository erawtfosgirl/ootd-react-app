import React from 'react'

export const BannerItem = ({ name, image }) => {
    return (
        <div className="slider-item">
            <img className="d-block h-100 w-100 object-fit-cover" src={image} alt="Banner" />
            <div className="slider-content text-center">
                <h1>{name}</h1>
                <div className="shop-btn">
                    <a href="#shop">SHOP</a>
                </div>
            </div>
        </div>

    )
}

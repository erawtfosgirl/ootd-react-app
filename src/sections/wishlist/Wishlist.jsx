import React from 'react'

import { ProductItem } from '../../components/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearWishlist } from '../../redux/reducers/wishlistSlice';

export const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist);
    const dispatch=useDispatch();
    return (
        <section className="wishlist-products-section">
            <div className="container">
                <div className="title mb-4 d-flex justify-content-between align-items-center">
                    <h2>My Wishlist</h2>
                    <button type="button" onClick={()=>dispatch(clearWishlist())}>Remove All</button>
                </div>
                <div className="row g-3">
                    {wishlist.map(product => (
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            thumbnail={product.thumbnail}
                            price={product.price}
                            discountPercentage={product.discountPercentage}
                        />
                    ))}

                </div>
            </div>
        </section>

    )
}

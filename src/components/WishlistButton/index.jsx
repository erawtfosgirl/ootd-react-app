import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, deleteFromWishlist } from '../../redux/reducers/wishlistSlice';

export const WishlistButton = ({ id, newItem }) => {
    const dispatch=useDispatch();
    const wishlist = useSelector(state => state.wishlist);

    // Check if the product is in the wishlist
    const isInWishlist = wishlist.find(product => product.id === id);
    const handleWishlistAction = () => {
        if (isInWishlist) {
            dispatch(deleteFromWishlist(id));
            console.log("Product removed from wishlist");
        } else {
            dispatch(addToWishlist(newItem));
            console.log("Product added to wishlist");
        }
    }
    return (
        <button type='button' className="wishlist action-box" onClick={handleWishlistAction}>
            {isInWishlist ?
                (
                    <i className="fa-solid fa-heart solid-icon" />
                ) : (
                    <i className="fa-regular fa-heart regular-icon" />
                )}
        </button>
    )
}

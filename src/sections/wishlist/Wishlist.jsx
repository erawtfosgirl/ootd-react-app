import { ProductItem } from '../../components/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearWishlist } from '../../redux/reducers/wishlistSlice';
import { NavLink } from 'react-router-dom';

export const Wishlist = () => {
    const wishlistProducts = useSelector(state => state.wishlist);
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);
    return (
        <section className="wishlist-products-section">
            <div className="container">
                {wishlist.length > 0 ?
                    (
                        <>
                            <div className="title mb-4 d-flex justify-content-between align-items-center">
                                <h2>My Wishlist</h2>
                                <button type="button" onClick={() => dispatch(clearWishlist())}>Remove All</button>
                            </div>
                            <div className="row g-3">
                                {wishlistProducts.map(product => (
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
                        </>
                    ) : (
                        <div className='empty-box text-center'>
                            <p>You don't have any products in your wishlist.</p>
                            <NavLink to='/shop' className='btn btn-dark'>Continue shopping</NavLink>
                        </div>
                    )}


            </div>
        </section>

    )
}

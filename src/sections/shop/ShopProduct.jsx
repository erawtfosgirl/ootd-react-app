import React, { useEffect, useState } from 'react'
import { productData } from '../../db/productData';
import { ProductItem } from '../../components/ProductItem';

import { FilterMenu } from '../../components/FilterMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setSortBy, sortProducts } from '../../redux/reducers/productsSlice';

export const ShopProduct = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.filteredProducts);
    const sortBy = useSelector(state => state.products.sortBy)

    useEffect(() => {
        dispatch(setProducts(productData));
    }, [dispatch])

    useEffect(() => {
        dispatch(sortProducts())
    }, [dispatch, sortBy])

    const handleSort = (e) => {
        dispatch(setSortBy(parseInt(e.target.value, 10)))
    };

    const openSidebar = () => {
        setIsOpen(true)
    }
    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <section className="shop-products-section my-5">
            <div className="container">
                <div className="title mb-4 d-flex justify-content-between align-items-center">
                    <button className="shopfilter-btn" onClick={openSidebar}>
                        <i className="fa-solid fa-bars" />
                    </button>
                    <select
                        className="form-select options"
                        aria-label="Default select example"
                        value={sortBy}
                        onChange={handleSort}
                    >
                        <option value={1}>Priced from low to high</option>
                        <option value={2}>Priced from high to low</option>
                        <option value={3}>Sort by product name</option>
                    </select>
                </div>
                {products.length > 0 ? (
                    <div className="row g-3">
                        {products.map(product => (
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
                ) : (
                    <div className='noresultbox'>
                        <h3>No result found</h3>
                    </div>
                )}
            </div>
            {isOpen && (
                <div className="overlay" style={{ display: 'block' }} onClick={closeSidebar}></div>
            )}
            <FilterMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </section>

    )
}

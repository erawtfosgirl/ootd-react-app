import React, { useEffect, useState } from 'react'
import { productData } from '../../db/productData';
import { ProductItem } from '../../components/ProductItem';

import { FilterMenu } from '../../components/FilterMenu';

export const ShopProduct = () => {
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setProducts(productData);
    }, [])

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
                    >
                        <option selected="" value={1}>
                            Sort by Position
                        </option>
                        <option value={2}>Sort by Price</option>
                        <option value={3}>Sort by Product Name</option>
                    </select>
                </div>
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
            </div>
            {isOpen && (
                <div className="overlay" style={{ display: 'block' }} onClick={closeSidebar}></div>
            )}
            <FilterMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>

    )
}

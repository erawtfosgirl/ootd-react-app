import React, { useEffect, useState } from 'react'
import { productData } from '../../db/productData';
import { ProductItem } from '../../components/ProductItem';

export const TopProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productData);
    }, [])

    return (
        <section className="products-section mt-5">
            <div className="container">
                <div className="title mb-4 text-center">
                    <h2>Trending</h2>
                    <div className="txt">Top view in this week</div>
                </div>
                <div className="row g-3">
                    {products.map(product => (
                        <ProductItem
                            id={product.id}
                            name={product.name}
                            image={product.image}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}

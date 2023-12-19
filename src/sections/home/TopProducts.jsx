import React, { useEffect, useState } from 'react'
import { productData } from '../../db/productData';
import { ProductItem } from '../../components/ProductItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

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
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    navigation
                    modules={[Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >

                    {products.map(product => (
                        <SwiperSlide key={product.id}>
                            <ProductItem
                                id={product.id}
                                name={product.name}
                                thumbnail={product.thumbnail}
                                price={product.price}
                                discountPercentage={product.discountPercentage}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>

    )
}

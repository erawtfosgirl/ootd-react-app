import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { categoryData } from '../../db/categoryData'
import { CategoryItem } from '../../components/CategoryItem'

export const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoryData);
    }, [])

    return (
        <section className="categories-section mt-5">
            <div className="container">
                <h2 className="mb-4 text-center">Shop by categories</h2>
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
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {categories.map(category => (
                        <SwiperSlide key={category.id}>
                            <CategoryItem
                                name={category.name}
                                image={category.image}
                            />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    )
}

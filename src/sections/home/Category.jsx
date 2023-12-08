import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import Category1 from '../../assets/images/categories/1165192303_1_1_1.jpg'
import Category2 from '../../assets/images/categories/1856349303_1_1_1.jpg'
import Category3 from '../../assets/images/categories/8917873033_2_1_1.jpg'
import Category4 from '../../assets/images/categories/3009210303_2_1_1.jpg'
import Category5 from '../../assets/images/categories/8820321800_2_1_1.jpg'
import Category6 from '../../assets/images/categories/6011210814_2_1_1.jpg'


export const Category = () => {
    return (
        <section className="categories-section mt-5">
            <div className="container">
                <h2 className="mb-4 text-center">Shop by categories</h2>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    navigation
                    modules={[Navigation]}
                    loop
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
                    <SwiperSlide>
                        <div className="category-item">
                            <a href="#">
                                <img className="img-fluid" src={Category1} alt="Category" />
                                <h3>Skirts</h3>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category-item">
                            <a href="#">
                                <img className="img-fluid" src={Category2} alt="Category" />
                                <h3>Accessories</h3>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category-item">
                            <a href="#">
                                <img className="img-fluid" src={Category3} alt="Category" />
                                <h3>Blazer</h3>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category-item">
                            <a href="#">
                                <img className="img-fluid" src={Category4} alt="Category" />
                                <h3>Shoes</h3>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category-item">
                            <a href="#">
                                <img className="img-fluid" src={Category5} alt="Category" />
                                <h3>Dress</h3>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category-item">
                            <a href="#">
                                <img className='img-fluid' src={Category6} alt="Category" />
                                <h3>Bags</h3>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

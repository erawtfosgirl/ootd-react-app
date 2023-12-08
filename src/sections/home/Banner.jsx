import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Banner1 from '../../assets/images/3597100832_9_1_1.jpg'
import Banner2 from '../../assets/images/IMAGE-landscape-fill-8cae5d8e-4358-4149-9e4c-38b89b6c01e3-default_0.jpg'

export const Banner = () => {

    return (
        <section className="slider-section">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="slider-item">
                        <img className="d-block h-100 w-100 object-fit-cover" src={Banner1} alt="Banner" />
                        <div className="slider-content text-center">
                            <h1>NEW IN</h1>
                            <div className="shop-btn">
                                <a href="#shop">SHOP</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slider-item'>
                    <div className="slider-item">
                        <img className="h-100 w-100 object-fit-cover" src={Banner2} alt="Banner" />
                        <div className="slider-content text-center">
                            <h1>JEANS</h1>
                            <div className="shop-btn">
                                <a href="#shop">SHOP</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

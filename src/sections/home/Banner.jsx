import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { bannerData } from '../../db/bannerData';
import { useEffect, useState } from 'react';
import { BannerItem } from '../../components/BannerItem';


export const Banner = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        setBanners(bannerData);
    }, [])

    return (
        <section className="slider-section">
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
            >
                {banners.map(banner => (
                    <SwiperSlide>
                        <BannerItem
                            key={banner.id}
                            name={banner.name}
                            image={banner.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

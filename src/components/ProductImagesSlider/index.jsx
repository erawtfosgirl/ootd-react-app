import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, Scrollbar } from 'swiper/modules'
import { useState } from 'react'


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './swiper.css'


export const ProductImagesSlider = ({ images }) => {
  const [activeThumb, setActiveThumb] = useState(null);
  
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={activeThumb ? { swiper: activeThumb } : null}
        className='product-images-slider'
      >
        {
          images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="product images" />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Thumbs]}
        watchSlidesProgress={true}
        className='product-images-slider-thumbs'
      >
        {
          images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="product-images-slider-thumbs-wrapper">
                <img src={item} alt="product images" />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}


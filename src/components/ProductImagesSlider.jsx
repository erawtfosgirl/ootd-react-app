import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { useState } from 'react'


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style.css'


export const ProductImagesSlider = ({ images }) => {
  const [activeThumb, setActiveThumb] = useState(null);
  console.log(activeThumb);
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={activeThumb ? { swiper: activeThumb } : null}
        className='product-images-slider col-lg-9 col-md-2 col-sm-12 col-12 order-2'
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
        modules={[Navigation, Thumbs]}
        watchSlidesProgress={true}
        className='product-images-slider-thumbs col-lg-2 col-md-2 col-sm-12 col-12 order-1'
      >
        {
          images.map((item, index) => (
            <SwiperSlide key={index} className='d-flex flex-column '>
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


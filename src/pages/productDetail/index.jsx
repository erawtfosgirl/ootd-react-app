import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../../db/productData';
import { ProductItem } from '../../components/ProductItem';
import { ProductImagesSlider } from '../../components/ProductImagesSlider';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/reducers/basketSlice';
import { WishlistButton } from '../../components/WishlistButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export const ProductDetail = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const { id } = useParams();
  const productId = parseInt(id);
  const foundProduct = productData.find(item => item.id === productId);
  const { name, discountPercentage, price, description, material, sizes, colors, images } = foundProduct;

  const discountedPrice = discountPercentage > 0 ? price - (price * discountPercentage * 0.01) : null;

  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    setProductQuantity(prevQuantity => prevQuantity - 1);
  }
  const increaseQuantity = () => {
    setProductQuantity(prevQuantity => prevQuantity + 1);
  }

  return (
    <>
      <section className="details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <ProductImagesSlider images={images} />
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 product-info-main">
              <div className="top">
                <h2 className="product-name">{name}</h2>
                <p className="product-info-price d-flex gap-2">
                  {discountedPrice ? (
                    <>
                      <div className="price-regular">{`${discountedPrice.toFixed(2)} $`}</div>
                      <div className="price-old">
                        <del>{`${price.toFixed(2)} $`}</del>
                      </div>
                    </>
                  ) : (
                    <div className="price-regular">{`${price.toFixed(2)} $`}</div>
                  )}
                </p>
              </div>
              <div className="product-add-form">
                <form action="" className="d-flex flex-column gap-3">
                  <div className="product-info-colors d-flex align-items-center gap-2">
                    <span className="txt">Color :</span>
                    {colors.map(color => (
                      <label
                        className="colorlabel"
                        style={{ backgroundColor: `${color}` }}
                        key={color}
                      >
                        <input
                          type="radio"
                          name="color"
                          value={color}
                          onChange={() => setSelectedColor(color)}
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ionicon markicon"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="none"
                            stroke="white"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={32}
                            d="M416 128L192 384l-96-96"
                          />
                        </svg>
                      </label>
                    ))}
                  </div>
                  <div className="product-info-sizes d-flex align-items-center gap-2">
                    {sizes.length > 0 && <span className="txt">Size :</span>}

                    {sizes.map(size => (
                      <label className="sizelabel selected" key={size}>
                        <input
                          type="radio"
                          name="color"
                          value={size}
                          onChange={() => setSelectedSize(size)}
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                  <div className="product-options d-flex align-items-center gap-3">
                    <div className="product-quantity col-lg-2 col-md-2 col-sm-3 col-3">
                      <button type='button' className="decrease" onClick={decreaseQuantity} disabled={productQuantity > 1 ? false : true}>
                        <i className="fa-solid fa-minus" />
                      </button>
                      <input type="text" value={productQuantity} className="col-6" />
                      <button type='button' className="increase" onClick={increaseQuantity}>
                        <i className="fa-solid fa-plus" />
                      </button>
                    </div>
                    <button type="button" className=" addtocart" onClick={() =>
                      dispatch(
                        addToBasket(
                          {
                            ...foundProduct,
                            quantity: productQuantity,
                            color: selectedColor,
                            size: selectedSize
                          }
                        )
                      )}>
                      Add to cart
                    </button>
                    <WishlistButton id={foundProduct.id} newItem={foundProduct} />
                  </div>
                </form>
              </div>
              <div className="bottom">
                <h6>Description</h6>
                <p className="description">
                  {description}
                </p>
                <h6>Material</h6>
                <p className="material">
                  {material}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="related-products my-5">
        <div className="container">
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
            {productData.map(product => (
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
    </>
  )
}

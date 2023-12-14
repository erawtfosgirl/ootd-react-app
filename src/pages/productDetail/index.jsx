import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../../db/productData';
import { ProductItem } from '../../components/ProductItem';
import { ProductImagesSlider } from '../../components/ProductImagesSlider';

export const ProductDetail = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    setRelatedProducts(productData);
  }, [])

  const { id } = useParams();
  const productId = parseInt(id);
  const foundProduct = productData.find(item => item.id === productId);
  const { name, discount_percentage, regular_price, discounted_price, description, material, images } = foundProduct;

  return (
    <>
      <section className="details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <ProductImagesSlider images={images.slider_images} />
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 product-info-main">
              <div className="top">
                <h2 className="product-name">{name}</h2>
                <p className="product-info-price d-flex gap-2">
                  {discount_percentage > 0 ? (
                    <>
                      <div className="price-regular">{discounted_price} $</div>
                      <div className="price-old">
                        <del>{regular_price} $</del>
                      </div>
                    </>
                  ) : (
                    <div className="price-regular">{regular_price} $</div>
                  )}
                </p>
              </div>
              <div className="product-add-form">
                <form action="" className="d-flex flex-column gap-3">
                  <div className="product-info-colors d-flex align-items-center gap-2">
                    <span className="txt">Color :</span>
                    <label
                      className="colorlabel"
                      style={{ backgroundColor: "#9bab37" }}
                    >
                      <input type="radio" name="color" defaultValue="#9BAB37" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon markicon"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M416 128L192 384l-96-96"
                        />
                      </svg>
                    </label>
                    <label
                      className="colorlabel"
                      style={{ backgroundColor: "#edc321" }}
                    >
                      <input type="radio" name="color" defaultValue="#edc321" />
                    </label>
                    <label
                      className="colorlabel"
                      style={{ backgroundColor: "#3780ab" }}
                    >
                      <input type="radio" name="color" defaultValue="#3780ab" />
                    </label>
                  </div>
                  <div className="product-info-sizes d-flex align-items-center gap-2">
                    <span className="txt">Size :</span>
                    <label className="sizelabel selected">
                      <input type="radio" name="color" defaultValue="S" />
                      XS
                    </label>
                    <label className="sizelabel">
                      <input type="radio" name="color" defaultValue="S" />S
                    </label>
                    <label className="sizelabel">
                      <input type="radio" name="color" defaultValue="S" />M
                    </label>
                  </div>
                  <div className="product-options d-flex align-items-center gap-3">
                    <div className="product-quantity col-lg-2 col-md-2 col-sm-3 col-3">
                      <button className="decrease">
                        <i className="fa-solid fa-minus" />
                      </button>
                      <input type="text" defaultValue={1} className="col-6" />
                      <button className="increase">
                        <i className="fa-solid fa-plus" />
                      </button>
                    </div>
                    <button type="button" className=" addtocart">
                      Add to cart
                    </button>
                    <button className="wishlist action-box">
                      <i className="fa-regular fa-heart regular-icon" />
                      <i className="fa-solid fa-heart hidden solid-icon" />
                    </button>
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
          <div className="row g-3">
            {relatedProducts.map(product => (
              <ProductItem
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.images.main_image}
                regularPrice={product.regular_price}
                discountedPrice={product.discounted_price}
                discountPercentage={product.discount_percentage}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

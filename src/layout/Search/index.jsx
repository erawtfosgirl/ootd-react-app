import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchContext';

export const Search = () => {
    const { isOpen, closeSearch } = useContext(SearchContext);
    return (
        <div className={`search-area ${isOpen ? 'active-search-area' : ''}`}>
            <div className="container">
                <div className="exit-search text-end" onClick={closeSearch}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 32 32"
                        fill="none"
                    >
                        <path
                            d="M6.66797 6.66699L25.3334 25.3324"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.66711 25.3324L25.3325 6.66699"
                            stroke="#101010"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-9 col-10 search-bar mt-5 d-flex align-items-center gap-3 m-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={25}
                        viewBox="0 0 24 25"
                        fill="none"
                    >
                        <path
                            d="M11.5 21.5C16.7467 21.5 21 17.2467 21 12C21 6.75329 16.7467 2.5 11.5 2.5C6.25329 2.5 2 6.75329 2 12C2 17.2467 6.25329 21.5 11.5 21.5Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M22 22.5L20 20.5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <input type="search" placeholder="What are you looking for ?" />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-9 col-10 mt-5 search-products m-auto">
                    <div className="title d-flex justify-content-between align-items-center">
                        <h5>Products</h5>
                        <a href="#shop">See all (17)</a>
                    </div>
                    <div className="col-12 search-item d-flex align-items-center gap-3">
                        <div className="col-2">
                            <a href="#product">
                                <img
                                    className="img-fluid "
                                    src="assets/images/products/bag1_1.jpg"
                                    alt="Image"
                                />
                            </a>
                        </div>
                        <div className="product-details">
                            <h5 className="product-name ">
                                <a href="#product">Shoulder bag with flap</a>
                            </h5>
                            <div className="product-price d-flex align-items-center gap-2">
                                <div className="price-regular">55 $</div>
                                <div className="price-old">
                                    <del> 70 $</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 search-item d-flex align-items-center gap-3">
                        <div className="col-2">
                            <a href="#product">
                                <img
                                    className="img-fluid "
                                    src="assets/images/products/bag1_2.jpg"
                                    alt="Image"
                                />
                            </a>
                        </div>
                        <div className="product-details">
                            <h5 className="product-name ">
                                <a href="#product">Shoulder bag with flap</a>
                            </h5>
                            <div className="product-price d-flex align-items-center gap-2">
                                <div className="price-regular">55 $</div>
                                <div className="price-old">
                                    <del> 70 $</del>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 search-item d-flex align-items-center gap-3">
                        <div className="col-2">
                            <a href="#product">
                                <img
                                    className="img-fluid "
                                    src="assets/images/products/bag1_1.jpg"
                                    alt="Image"
                                />
                            </a>
                        </div>
                        <div className="product-details">
                            <h5 className="product-name ">
                                <a href="#product">Shoulder bag with flap</a>
                            </h5>
                            <div className="product-price d-flex align-items-center gap-2">
                                <div className="price-regular">55 $</div>
                                <div className="price-old">
                                    <del> 70 $</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

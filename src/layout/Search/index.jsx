import React, { useContext, useState } from 'react'
import { SearchContext } from '../../context/SearchContext';
import { SearchItem } from '../../components/SearchItem';
import { productData } from '../../db/productData';
import { SearchInput } from '../../components/SearchInput';
import { NavLink } from 'react-router-dom';

export const Search = () => {
    const { isOpen, closeSearch } = useContext(SearchContext);

    const [filteredProducts, setFilteredProducts] = useState(productData);

    const handleSearch = (term) => {
        const filtered = productData.filter(product =>
            product.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredProducts(filtered);
    };
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
                <SearchInput onSearch={handleSearch} />
                <div className="col-xl-6 col-lg-6 col-md-9 col-10 mt-5 search-products m-auto">
                    <div className="title d-flex justify-content-between align-items-center">
                        <h5>Products</h5>
                        <NavLink to="/shop">See all (17)</NavLink>
                    </div>
                    {filteredProducts.map(product => (
                        <SearchItem
                            key={product.id}
                            id={product.id}
                            image={product.images.main_image}
                            name={product.name}
                            discountPercentage={product.discount_percentage}
                            discountedPrice={product.discounted_price}
                            regularPrice={product.regular_price}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}

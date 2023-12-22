import React, { useEffect, useState } from 'react'
import { ReactComponent as ResetSvg } from '../../assets/icons/reset.svg'
import { categoryData } from '../../db/categoryData'
import { colorData } from '../../db/colorData'
import { sizeData } from '../../db/sizeData'
import { useDispatch } from 'react-redux'
import { setFilters } from '../../redux/reducers/productsSlice'


export const FilterMenu = ({ isOpen, setIsOpen }) => {
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(400);

    const dispatch = useDispatch();

    useEffect(() => {
        setCategories(categoryData);
        setColors(colorData);
        setSizes(sizeData.clothesSizes);
    }, [])

    const handleCategories = (e) => {
        const { value, checked } = e.target
        setSelectedCategories(prev => {
            if (checked) {
                return [...prev, value]
            }
            else {
                return prev.filter(category => category !== value); // Remove value from selectedCategories
            }
        })
    };

    const handleColors = (e) => {
        const { value, checked } = e.target
        setSelectedColors(prev => {
            if (checked) {
                return [...prev, value]
            }
            else {
                return prev.filter(color => color !== value);  // Remove value from selectedColors
            }
        })
    }

    const handleSizes = (e) => {
        const { value, checked } = e.target
        setSelectedSizes(prev => {
            if (checked) {
                return [...prev, value]
            }
            else {
                return prev.filter(size => size !== value);  // Remove value from selectedSizes
            }
        })
    }

    const handleFilter = () => {
        dispatch(
            setFilters({
                categories: selectedCategories,
                colors: selectedColors,
                sizes: selectedSizes,
                minPrice: parseInt(minPrice),
                maxPrice: parseInt(maxPrice)
            })
        );
        setIsOpen(false);
    }

    return (
        <div className={`filter-menu ${isOpen ? 'active' : ''}`}>
            <div className="filter-container">
                <div className="closefiltermenu text-end" onClick={() => setIsOpen(false)}>
                    <ResetSvg />
                </div>
                <div className="filter-options d-flex flex-column gap-4">
                    <div className="filter-option-item">
                        <h5 className="filter-options-title">Category</h5>
                        <div className="filter-options-content mt-4">
                            <ul className="items">
                                {categories.map(category => (
                                    <li key={category.id}>
                                        <label className="categorylabel">
                                            <input
                                                type="checkbox"
                                                name="color"
                                                value={category.name}
                                                checked={selectedCategories.includes(category.name)}
                                                onChange={handleCategories}
                                            />
                                            <span className='checkmark'></span>
                                            {category.name}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="filter-option-item">
                        <h5 className="filter-options-title">Price</h5>
                        <div className="filter-options-content">
                            <div className="price-input">
                                <div className="field">
                                    <span>Min</span>
                                    <input
                                        type="number"
                                        className="input-min"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                    />
                                </div>
                                <div className="separator">-</div>
                                <div className="field">
                                    <span>Max</span>
                                    <input
                                        type="number"
                                        className="input-max"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="slider">
                                <div className="progress" />
                            </div>
                            <div className="range-input">
                                <input
                                    type="range"
                                    className="range-min"
                                    min={0}
                                    max={400}
                                    value={minPrice}
                                    onChange={(e)=>setMinPrice(e.target.value)}
                                    step={1}
                                />
                                <input
                                    type="range"
                                    className="range-max"
                                    min={0}
                                    max={400}
                                    value={maxPrice}
                                    onChange={(e)=>setMaxPrice(e.target.value)}
                                    step={1}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="filter-option-item">
                        <h5 className="filter-options-title">Color</h5>
                        <div className="filter-options-content">
                            <div className="filter-colors">
                                {colors.map(color => (
                                    <label
                                        className="colorlabel"
                                        style={{ backgroundColor: `${color.name}` }}
                                        key={color.id}
                                    >
                                        <input
                                            type="checkbox"
                                            name="color"
                                            value={color.name}
                                            checked={selectedColors.includes(color.name)}
                                            onChange={handleColors}
                                        />
                                        {selectedColors.includes(color.name) &&
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
                                        }
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="filter-option-item">
                        <h5 className="filter-options-title">Size</h5>
                        <div className="filter-options-content">
                            <div className="filter-sizes">
                                {sizes.map(size => (
                                    <label className={`sizelabel ${selectedSizes.includes(size.name) ? 'selected' : ''}`} key={size.id}>
                                        <input
                                            type="checkbox"
                                            name="color"
                                            value={size.name}
                                            checked={selectedSizes.includes(size.name)}
                                            onChange={handleSizes}
                                        />
                                        {size.name}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button type='button' className='btn btn-dark' onClick={handleFilter}>Filter</button>
                </div>
            </div>
        </div>
    )
}

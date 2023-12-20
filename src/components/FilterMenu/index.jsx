import React, { useEffect, useState } from 'react'
import { ReactComponent as ResetSvg } from '../../assets/icons/reset.svg'
import { categoryData } from '../../db/categoryData'
import { colorData } from '../../db/colorData'
import { sizeData } from '../../db/sizeData'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../redux/reducers/productsSlice'


export const FilterMenu = ({ isOpen, setIsOpen }) => {
    const [categories, setCategories] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const dispatch = useDispatch();

   

    useEffect(() => {
        setCategories(categoryData);
        setColors(colorData);
        setSizes(sizeData.clothesSizes);
    })

    return (
        <div className={`filter-menu ${isOpen ? 'active' : ''}`}>
            <div className="filter-container">
                <div className="closefiltermenu text-end" onClick={() => setIsOpen(false)}>
                    <ResetSvg />
                </div>
                <div className="filter-options d-flex flex-column gap-4">
                    <div className="filter-option-item">
                        <h5 className="filter-options-title">Category</h5>
                        <div className="filter-options-content">
                            <ul className="items">
                                {categories.map(category => (
                                    <li className="item" key={category.id}>
                                        <a href="#">{category.name}</a>
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
                                        value={2500}
                                    />
                                </div>
                                <div className="separator">-</div>
                                <div className="field">
                                    <span>Max</span>
                                    <input
                                        type="number"
                                        className="input-max"
                                        value={7500}
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
                                    max={10000}
                                    defaultValue={2500}
                                    step={100}
                                />
                                <input
                                    type="range"
                                    className="range-max"
                                    min={0}
                                    max={10000}
                                    defaultValue={7500}
                                    step={100}
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
                                            type="radio"
                                            name="color"
                                            value={color.name}
                                            onChange={() => setSelectedColor(color.name)}
                                        />
                                        {selectedColor === color.name &&
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
                                    <label className={`sizelabel ${selectedSize === size.name ? 'selected' : ''}`} key={size.id}>
                                        <input
                                            type="radio"
                                            name="color"
                                            value={size.name}
                                            onChange={() => setSelectedSize(size.name)}
                                        />
                                        {size.name}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button className='btn btn-dark'>Filter</button>
                </div>
            </div>
        </div>
    )
}

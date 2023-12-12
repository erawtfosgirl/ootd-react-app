import React from 'react'
import { ReactComponent as ResetSvg } from '../assets/icons/reset.svg'


export const FilterMenu = ({isOpen,setIsOpen}) => {
    return (
        <div className={`filter-menu ${isOpen ? 'active':''}`}>
            <div className="filter-container">
                <div className="closefiltermenu text-end" onClick={()=>setIsOpen(false)}>
                    <ResetSvg />
                </div>
                <div className="filter-options d-flex flex-column gap-4">
                    <div className="filter-option-item">
                        <h5 className="filter-options-title">Category</h5>
                        <div className="filter-options-content">
                            <ul className="items">
                                <li className="item">
                                    <a href="#">Skirts</a>
                                </li>
                                <li className="item">
                                    <a href="#">Blazer</a>
                                </li>
                                <li className="item">
                                    <a href="#">Dress</a>
                                </li>
                                <li className="item">
                                    <a href="#">Shoes</a>
                                </li>
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
                                        defaultValue={2500}
                                    />
                                </div>
                                <div className="separator">-</div>
                                <div className="field">
                                    <span>Max</span>
                                    <input
                                        type="number"
                                        className="input-max"
                                        defaultValue={7500}
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
                                <div className="color-item">
                                    <a href="#">
                                        <div
                                            className="color-option"
                                            style={{ backgroundColor: "aqua" }}
                                        />
                                    </a>
                                </div>
                                <div className="color-item">
                                    <a href="#">
                                        <div
                                            className="color-option"
                                            style={{ backgroundColor: "rgb(204, 255, 0)" }}
                                        />
                                    </a>
                                </div>
                                <div className="color-item">
                                    <a href="#">
                                        <div
                                            className="color-option"
                                            style={{ backgroundColor: "rgb(186, 60, 165)" }}
                                        ></div>
                                    </a>
                                </div>
                                <div className="color-item">
                                    <a href="#">
                                        <div
                                            className="color-option"
                                            style={{ backgroundColor: "rgb(130, 135, 135)" }}
                                        ></div>
                                    </a>
                                </div>
                                <div className="color-item">
                                    <a href="#">
                                        <div
                                            className="color-option"
                                            style={{ backgroundColor: "rgb(0, 0, 0)" }}
                                        />
                                    </a>
                                </div>
                                <div className="color-item">
                                    <a href="#">
                                        <div
                                            className="color-option"
                                            style={{ backgroundColor: "rgb(123, 198, 85)" }}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-option-item">
                        <h5 className="filter-options-title">Size</h5>
                        <div className="filter-options-content">
                            <div className="filter-sizes">
                                <div className="size-item">
                                    <a href="#">
                                        <div className="size-option">XS</div>
                                    </a>
                                </div>
                                <div className="size-item">
                                    <a href="#">
                                        <div className="size-option">S</div>
                                    </a>
                                </div>
                                <div className="size-item">
                                    <a href="#">
                                        <div className="size-option">M</div>
                                    </a>
                                </div>
                                <div className="size-item">
                                    <a href="#">
                                        <div className="size-option">L</div>
                                    </a>
                                </div>
                                <div className="size-item">
                                    <a href="#">
                                        <div className="size-option">XL</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

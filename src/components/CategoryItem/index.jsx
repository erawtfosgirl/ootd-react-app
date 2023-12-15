import React from 'react'
import { NavLink } from 'react-router-dom'

export const CategoryItem = ({name,image}) => {
    return (
        <div className="category-item">
            <NavLink to="/shop">
                <img className="img-fluid" src={image} alt="Category" />
                <h3>{name}</h3>
            </NavLink>
        </div>
    )
}

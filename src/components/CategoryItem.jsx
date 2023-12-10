import React from 'react'

export const CategoryItem = ({name,image}) => {
    return (
        <div className="category-item">
            <a href="#">
                <img className="img-fluid" src={image} alt="Category" />
                <h3>{name}</h3>
            </a>
        </div>
    )
}

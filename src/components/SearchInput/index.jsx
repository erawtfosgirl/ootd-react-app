import React, { useEffect, useState } from 'react'

export const SearchInput = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term)
    }
    return (
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
            <input
                type="search"
                placeholder="What are you looking for ?"
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    )
}

import React from 'react'
import { Banner } from '../../sections/home/Banner'
import { Category } from '../../sections/home/Category'
import { TopProducts } from '../../sections/home/TopProducts'
import { Collection } from '../../sections/home/Collection'
import { Information } from '../../sections/home/Information'
import { Newsletter } from '../../sections/home/Newsletter'

export const HomePage = () => {
    return (
        <>
            <Banner />
            <Category />
            <TopProducts />
            <Collection />
            <Information />
            <Newsletter />
        </>
    )
}


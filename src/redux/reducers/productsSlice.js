import { createSlice } from "@reduxjs/toolkit";

const sortProductsBy = (products, sortBy) => {
    switch (sortBy) {
        case 1:
            return [...products].sort((a, b) => a.price - b.price);
        case 2:
            return [...products].sort((a, b) => b.price - a.price);
        case 3:
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        default:
            return [...products].sort((a, b) => a.price - b.price);
    }
};

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        filteredProducts: [],
        sortBy: 1
    },
    reducers: {
        setProducts: (state, action) => {
            state.allProducts = action.payload;
            state.filteredProducts = action.payload
        },
        setFilters: (state, action) => {
            const { categories, colors, sizes, minPrice, maxPrice } = action.payload;

            state.filteredProducts = state.allProducts.filter((product) => {
                const passCategory = categories.length === 0 || categories.includes(product.category);
                const passPrice = product.price >= minPrice && product.price <= maxPrice;
                const passColor = colors.length === 0 || product.colors.some(color => colors.includes(color));
                const passSize = sizes.length === 0 || product.sizes.some(size => sizes.includes(size));

                return passCategory && passPrice && passColor && passSize
            });

            state.filteredProducts = sortProductsBy(state.filteredProducts, state.sortBy);
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload
        },
        sortProducts: (state, action) => {
            state.filteredProducts = sortProductsBy(state.filteredProducts, state.sortBy);
        }

    }
})

export const { setProducts, setFilters, setSortBy, sortProducts } = productsSlice.actions;
export default productsSlice.reducer;
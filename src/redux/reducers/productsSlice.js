import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        filteredProducts: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.allProducts = action.payload;
            state.filteredProducts = action.payload
        },
        setFilters: (state, action) => {
            const { categories, minPrice, maxPrice, color, size } = action.payload;

            state.filteredProducts = state.allProducts.filter((product) => {
                const passCategory = categories.length === 0 || categories.includes(product.category.toLowerCase());
                const passPrice = (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice);
                const passColor = !color || product.color === color;
                const passSize = !size || product.size === size;

                return passCategory && passPrice && passColor && passSize;
            });
        },

    }
})

export const { setProducts, setFilters } = productsSlice.actions;
export default productsSlice.reducer;
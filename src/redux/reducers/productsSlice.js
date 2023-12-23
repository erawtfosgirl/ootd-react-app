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
            const { categories, colors, sizes, minPrice, maxPrice } = action.payload;

            state.filteredProducts = state.allProducts.filter((product) => {
                const passCategory = categories.length === 0 || categories.includes(product.category);
                const passPrice = product.price >= minPrice && product.price <= maxPrice;
                const passColor = colors.length === 0 || product.colors.some(color => colors.includes(color));
                const passSize = sizes.length === 0 || product.sizes.some(size => sizes.includes(size));

                return passCategory && passPrice && passColor && passSize
            });
        },
        sortProducts: (state, action) => {
            const { sortBy } = action.payload;
            console.log(sortBy);
            switch (sortBy) {
                case 1:
                    state.filteredProducts = [...state.filteredProducts].sort((a, b) => a.price - b.price);
                    break;
                case 2:
                    state.filteredProducts = [...state.filteredProducts].sort((a, b) => b.price - a.price);
                    break;
                case 3:
                    state.filteredProducts = [...state.filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
                default:
                    break;
            }
        }

    }
})

export const { setProducts, setFilters, sortProducts } = productsSlice.actions;
export default productsSlice.reducer;
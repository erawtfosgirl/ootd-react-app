import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: []
    },
    reducers: {
        filterProducts: (state, action) => {

        }
    }
})

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
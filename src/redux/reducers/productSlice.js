import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: "products",
    initialState: {
        filteredProducts: []
    },
    reducers: {
        filterProducts: (state, action) => {

        }
    }
})

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
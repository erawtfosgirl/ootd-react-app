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
        }
    }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
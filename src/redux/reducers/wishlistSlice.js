import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload);
        },
        clearWishlist: (state, action) => {
            return [];
        }
    }
})

export const { addToWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
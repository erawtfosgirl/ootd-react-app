import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            const id = action.payload;
            const existingProduct = state.find(product => product.id === id);
            if (existingProduct) {
                deleteFromWishlist();
            } else {
                state.push(action.payload);
            }
        },
        deleteFromWishlist: (state, action) => {
            const id = action.payload;
            return state.filter(product => product.id !== id);
        },
        clearWishlist: () => {
            return [];
        }
    }
})

export const { addToWishlist, deleteFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
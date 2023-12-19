import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './reducers/basketSlice';
import wishlistReducer from './reducers/wishlistSlice';
import productReducer from './reducers/productsSlice';

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        wishlist: wishlistReducer,
        products:productReducer
    }
})
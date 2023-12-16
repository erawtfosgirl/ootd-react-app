import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers: {
        addToBasket: (state, action) => {
            const isExist = state.find(product => product.id == action.payload.id);
            if (isExist) {
                isExist.quantity++;
            }
            else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        deleteFromBasket: (state, action) => {
            const productId = action.payload;
            return state.filter((product) => product.id !== productId);
        },
    }
})

export const { addToBasket, deleteFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
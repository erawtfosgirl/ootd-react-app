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
        }
    }
})

export const { addToBasket } = basketSlice.actions;
export default basketSlice.reducer;
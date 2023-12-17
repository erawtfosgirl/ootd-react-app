import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers: {
        addToBasket: (state, action) => {
            const { id, price, discountPercentage, quantity = 1 } = action.payload;
            const existingProduct = state.find(product => product.id === id);

            if (existingProduct) {
                existingProduct.quantity += quantity || 1;
            } else {
                const productPrice = discountPercentage > 0 ? price - (price * discountPercentage * 0.01) : price;
                state.push({ ...action.payload, price: productPrice, quantity: quantity || 1 });
            }
            //quantity || 1 checks whether quantity exists and is truthy.
            // If quantity exists and has a value (other than 0 or false), it will use that value.
            // If quantity is null, undefined, 0, false, or any falsy value, it will default to 1.
        },
        deleteFromBasket: (state, action) => {
            const productId = action.payload;
            return state.filter(product => product.id !== productId);
        },
        incrementQuantity: (state, action) => {
            const findProd = state.find(product => product.id === action.payload);
            findProd.quantity++;
        },
        decrementQuantity: (state, action) => {
            const findProd = state.find((product) => product.id == action.payload);
            findProd.quantity--;
        },
        clearBasket: (state, action) => {
            return [];
        }
    }
})

export const { addToBasket, deleteFromBasket, incrementQuantity, decrementQuantity, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
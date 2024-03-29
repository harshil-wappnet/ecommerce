import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsAddedToCart: [],
};

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { product, quantity } = action.payload;
            // const totalQuantity = quantity;
            const existingProductIndex = state.productsAddedToCart.findIndex(item => item.id === product.id);

            if (existingProductIndex !== -1) {
                // If product already exists in the cart, increase its quantity
                state.productsAddedToCart[existingProductIndex].quantity += quantity;
            } else {
                // If product is not in the cart, add it with quantity 1
                state.productsAddedToCart.push({ ...product, quantity: quantity });
            }
        },
    },
});

export const { addToCart } = ProductSlice.actions;
export default ProductSlice.reducer;

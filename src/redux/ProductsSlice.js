import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsAddedToCart: [],
    productActive: null,
};

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { product } = action.payload;
            state.productsAddedToCart.push(product); // Assuming payload is the product object
        },
        productactive(state, action) {
            state.productActive = action.payload;
        }
    },
});

export const { addToCart, productactive } = ProductSlice.actions;
export default ProductSlice.reducer;

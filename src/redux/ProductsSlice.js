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
            let total = 0;
            const existingProductIndex = state.productsAddedToCart.findIndex(item => item.id === product.id);

            if (existingProductIndex !== -1) {
                // If product already exists in the cart, increase its quantity
                state.productsAddedToCart[existingProductIndex].quantity += quantity;
                state.productsAddedToCart[existingProductIndex].total += product.price * quantity;
            } else {
                // If product is not in the cart, add it with quantity 1
                total = product.price * quantity;
                state.productsAddedToCart.push({ ...product, quantity: quantity, total: total });
            }
        },
        reset: () => initialState,
    },
});

export const { addToCart, reset } = ProductSlice.actions;

export const cartTotal = state =>
    state.products.productsAddedToCart.reduce((total, product) => total + product.total, 0);

export default ProductSlice.reducer;

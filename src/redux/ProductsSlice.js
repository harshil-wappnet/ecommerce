import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsAddedToCart: [],
};

const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { product, quantity, size, color } = action.payload;
            let total = 0;
            const existingProductIndex = state.productsAddedToCart.findIndex(item =>
                item.id === product.id &&
                item.size === size &&
                item.color === color
            );

            if (existingProductIndex !== -1) {
                // If product with the same size and color already exists in the cart, increase its quantity
                state.productsAddedToCart[existingProductIndex].quantity += quantity;
                state.productsAddedToCart[existingProductIndex].total += product.price * quantity;
            } else {
                // If product is not in the cart or has different size or color, add it as a new item
                total = product.price * quantity;
                state.productsAddedToCart.push({ ...product, quantity: quantity, total: total, size: size, color: color });
            }
        },
        reset: () => initialState,
    },
});

export const { addToCart, reset } = ProductSlice.actions;

export const cartTotal = state =>
    state.products.productsAddedToCart.reduce((total, product) => total + product.total, 0);

export default ProductSlice.reducer;

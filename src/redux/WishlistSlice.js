import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsAddedToWishlist: [],
};

const WishListSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist(state, action) {
            const { product } = action.payload;
            const existingProductIndex = state.productsAddedToWishlist.findIndex(item => item.id === product.id);

            if (existingProductIndex === -1) {
                state.productsAddedToWishlist.push({ ...product });
            }
        },
        removeFromWishlist(state, action) {
            const { index } = action.payload;
            state.productsAddedToWishlist.splice(index, 1);
        }
    }
});

export const { addToWishlist, removeFromWishlist } = WishListSlice.actions;
export default WishListSlice.reducer;

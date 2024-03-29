import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './ProductsSlice';
import WishListSlice from './WishlistSlice';
export const store = configureStore({
    reducer: {
        products: ProductsSlice,
        wishlists: WishListSlice,
    },
});

import { configureStore } from '@reduxjs/toolkit';
import ProductsSlice from './ProductsSlice';
import WishListSlice from './WishlistSlice';
import DeliveryDetailSlice from './DeliveryDetailSlice';


export const store = configureStore({
    reducer: {
        products: ProductsSlice,
        wishlists: WishListSlice,
        customers: DeliveryDetailSlice
    },
});

import { combineReducers } from '@reduxjs/toolkit'
import DeliveryDetailSlice from './DeliveryDetailSlice'
import ProductsSlice from './ProductsSlice'
import WishlistSlice from './WishlistSlice'

const rootReducer = combineReducers({
    products: ProductsSlice,
    wishlists: WishlistSlice,
    customers: DeliveryDetailSlice
})

export default rootReducer;
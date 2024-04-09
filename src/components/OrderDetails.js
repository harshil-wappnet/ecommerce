import React from 'react'
import { useSelector } from 'react-redux';
const OrderDetails = () => {
    const cartItems = useSelector(state => state.products.productsAddedToCart);
    return (
        <div>
            <div className='space-y-4'>
                {/* Render each cart item */}
                <h3 className='text-lg font-medium capitalize mb-4 mt-2'>{cartItems.length === 0 ? "Your Cart is Empty!" : "Order Details"}</h3>
                {cartItems.map((item, index) => (
                    <div key={index} className='flex items-center gap-6 p-4 border border-gray-200 rounded'>
                        <div className='w-28 flex-shrink-0'>
                            <img src={item.imageSrc} alt='' className='w-full' />
                        </div>
                        <div>
                            <h5 className='text-gray-800 font-medium'>{item.title.length > 30 ? `${item.title.substring(0, 24)}...` : item.title}</h5>
                            <p className='text-sm text-gray-600'>Price: {item.price}</p>
                            <p className='text-sm text-gray-600'>Quantity: {item.quantity}</p>
                            <p className='text-sm text-gray-600'>SubTotal: {item.total}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderDetails

import React from 'react'
import Products from '../../components/Products';
const TopArrivals = () => {
    return (
        <div>
            <div className='container'>
                <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>Top New Arrivals</h2>
            </div>
            <Products />
        </div>
    )
}

export default TopArrivals

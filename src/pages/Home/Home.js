import React from 'react'
import { Link } from 'react-router-dom'
import Features from './Features';
import ShopByCategory from './ShopByCategory';
import TopArrivals from './TopArrivals';
const Home = () => {
    return (
        <div>
            <div className='bg-cover py-36 banner'>
                <div className='container'>
                    <h1 className='text-6xl text-white font-medium mb-4 capitalize'>
                        Best Collection of <br />Clothing Brand
                    </h1>
                    <p className='text-white'>lorem34
                        ipsum dolor sit amet, consectetur adipisicing elit. <br />Quasi voluptas eum repellendus quo nesciunt!
                    </p>
                    <div className='mt-12'>
                        <Link to="/shop" className='bg-black border border-primary text-white mt-5 px-8 py-3 font-medium rounded-md hover:bg-white hover:text-primary'>Shop Now</Link>
                    </div>
                </div>
            </div>
            <Features />
            <ShopByCategory />
            <TopArrivals />
        </div>
    )
}

export default Home

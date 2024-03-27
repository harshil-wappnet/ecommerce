import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FcCustomerSupport } from "react-icons/fc";
import kurti1 from '../assets/images/kurti1.webp';
import cc from '../assets/images/cc.webp'
import sareee from '../assets/images/sareee.avif'
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Products from '../components/Products';
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
                        <Link to="/" className='bg-black border border-primary text-white mt-5 px-8 py-3 font-medium rounded-md hover:bg-white hover:text-primary'>Shop Now</Link>
                    </div>
                </div>
            </div>
            <div className='container py-16'>
                <div className='w-10/12 grid lg:grid-cols-3 grid-cols-1 gap-6 mx-auto justify-center'>
                    <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                        <FaShippingFast className='w-12 h-12 object-contain' />
                        <div>
                            <h4 className='font-medium capitalize text-lg'>Free Shipping</h4>
                            <p className='text-gray-500 text-sm'>Order over $200</p>
                        </div>
                    </div>
                    <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                        <GiMoneyStack className='w-12 h-12 object-contain' />
                        <div>
                            <h4 className='font-medium capitalize text-lg'>Money return</h4>
                            <p className='text-gray-500 text-sm'>30 days money return</p>
                        </div>
                    </div>
                    <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
                        <FcCustomerSupport className='w-12 h-12 object-contain' />
                        <div>
                            <h4 className='font-medium capitalize text-lg'>24/7 Support</h4>
                            <p className='text-gray-500 text-sm'>Customer Support</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className='container py-16'>
                <div className='flex justify-between mb-5'>
                    <h2 className='text-3xl font-medium text-gray-800 uppercase flex items-center'>Shop By Category</h2>
                    <div className='w-full max-w-xl relative flex'>
                        <span className='absolute text-lg text-gray-400' style={{ top: "50%", left: "2%", transform: "translate(-2%, -50%" }}>
                            <FaSearch />
                        </span>
                        <input type='text' className='w-full border border-primary border-r-0 pl-8 py-3 pr-3 rounded-l-md focus:outline-none' placeholder='Search here' />
                        <button className='bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition'>Search</button>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 category'>
                    <div className='relative col rounded-sm overflow-hidden group'>
                        <img src={kurti1} alt='Kurti' />
                        <Link to='/' className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-medium group-hover:bg-opacity-60 transition'>Kurti</Link>
                    </div>
                    <div className='relative col rounded-sm overflow-hidden group'>
                        <img src={cc} alt='chaniya-choli' />
                        <Link to='/' className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-medium group-hover:bg-opacity-60 transition'>Traditional</Link>
                    </div>
                    <div className='relative col rounded-sm overflow-hidden group'>
                        <img src={sareee} alt='chaniya-choli' />
                        <Link to='/' className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-medium group-hover:bg-opacity-60 transition'>Traditional</Link>
                    </div>
                </div>
            </div >
            <div className='container'>
                <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>Top New Arrivals</h2>
            </div>
            <Products />
        </div>
    )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import dress from '../assets/images/dress.avif'
const Products = () => {
    return (
        <div className='container pb-16'>
            <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>Top New Arrivals</h2>
            <div className='grid grid-cols-4 gap-6'>
                <div className='bg-white shadow rounded overflow-hidden'>
                    <div className='relative'>
                        <img src={dress} alt='' className='w-full' />
                        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2'>
                            <Link to='/' className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>
                                <FaSearch />
                            </Link>
                            <Link to='/' className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>
                                <CiHeart />
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4'>
                        <Link to='/'>
                            <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>Guyer chair</h4>
                        </Link>
                        <div className='flex items-baseline mb-1 space-x-2'>
                            <p className='text-xl text-primary font-semibold '>$45.00</p>
                            <p className='text-sm text-gray-400 line-through'>$55.00</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='flex gap-1 text-sm text-yellow-400'>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                                <span><FaStar /></span>
                            </div>
                            <div className='text-xs text-gray-500 ml-2'>(150)</div>
                        </div>
                    </div>
                    <Link to='/' className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'>Add to Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default Products

import React from 'react'
import { Link } from 'react-router-dom'
import kurti1 from '../../assets/images/kurti1.webp';
import cc from '../../assets/images/cc.webp'
import sareee from '../../assets/images/sareee.avif'
import { FaSearch } from "react-icons/fa";
const ShopByCategory = () => {
    return (
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
    )
}

export default ShopByCategory

import React from 'react'
import { Link } from 'react-router-dom'
import kurti1 from '../../assets/images/kurti1.webp';
import cc from '../../assets/images/cc.webp'
import sareee from '../../assets/images/sareee.avif'
import SearchComponent from '../../components/SearchComponent';
const ShopByCategory = () => {
    return (
        <div className='container py-16'>
            <div className='flex justify-between mb-5'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 uppercase flex items-center'>Shop By Category</h2>
                <div className='w-full max-w-xl relative flex justify-end'>
                    <SearchComponent />
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

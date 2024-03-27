import React from 'react'
import dress from '../assets/images/dress.avif';
import dressview1 from '../assets/images/dress-view-1.avif'
import dressview2 from '../assets/images/dress-view-2.avif'
import { FaStar } from "react-icons/fa";

const ProductView = () => {
    return (
        <div className='container grid grid-cols-2 gap-6'>
            <div>
                <img src={dress} alt='outfit-1' className='w-full h-96' />
                <div className='grid grid-cols-5 gap-4 mt-4'>
                    <img src={dressview1} alt='' className='w-full cursor-pointer border border-primary' />
                    <img src={dressview2} alt='' className='w-full cursor-pointer border ' />
                    <img src={dress} alt='' className='w-full cursor-pointer border ' />
                    <img src={dressview2} alt='' className='w-full cursor-pointer border ' />
                    <img src={dressview1} alt='' className='w-full cursor-pointer border ' />
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-medium uppercase mb-2'>V-Neck Fit & Flare Dress</h2>
                <div className='flex gap-1 text-sm text-yellow-400'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                </div>
            </div>
        </div>
    )
}

export default ProductView

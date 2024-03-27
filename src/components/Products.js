import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import dress from '../assets/images/dress.avif';
import dressback from '../assets/images/dressback.avif';
import vneckdress from '../assets/images/v-neck-dress.avif';
import vneckdress1 from '../assets/images/v-neck-dress-1.avif';

const ProductCard = ({ imageSrc, title, price, discountPrice }) => {
    return (
        <div className='bg-white shadow rounded overflow-hidden group'>
            <div className='relative'>
                <img src={imageSrc} alt='' className='w-full' />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>
                    <Link to='/' className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>
                        <FaSearch />
                    </Link>
                    <Link to='/' className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>
                        <CiHeart />
                    </Link>
                </div>
            </div>
            <div className='pt-4 pb-3 px-4 h-30'> {/* Added fixed height */}
                <Link to='/'>
                    <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>{title}</h4>
                </Link>
                <div className='flex items-baseline mb-1 space-x-2'>
                    <p className='text-xl text-primary font-semibold '>{price}</p>
                    <p className='text-sm text-gray-400 line-through'>{discountPrice}</p>
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
            <Link to='/' className='block justify-center w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'>Add to Cart</Link>
        </div>
    );
};

const Products = () => {
    return (
        <div className='container pb-16'>
            <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>Top New Arrivals</h2>
            <div className='grid grid-cols-4 gap-6'>
                <ProductCard
                    imageSrc={dress}
                    title="Floral Print Fit & Flare Dress with Waist Tie-Up"
                    price="$45.00"
                    discountPrice="$55.00"
                />
                <ProductCard
                    imageSrc={dressback}
                    title="Micro-Print A-line Dress"
                    price="$15.00"
                    discountPrice="$20.00"
                />
                <ProductCard
                    imageSrc={vneckdress1}
                    title="V-Neck Fit & Flare Dress"
                    price="$25.00"
                    discountPrice="$35.00"
                />
                <ProductCard
                    imageSrc={vneckdress}
                    title="Solid Fit and Flare Dress"
                    price="$55.00"
                    discountPrice="$75.00"
                />
            </div>
        </div>
    );
};

export default Products;

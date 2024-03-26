import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import traditional from '../assets/images/chaniya-choli.webp';
import kurti from '../assets/images/kurti.jpg';
import saree from '../assets/images/saree.avif';
import skirt from '../assets/images/skirt.jpg';

const ResponsiveNavBar = () => {
    return (
        <div className='container flex flex-col '>
            <div className='px-8 py-4 bg-primary flex items-center cursor-pointer relative group w-full'>
                <span className='text-white'>
                    <GiHamburgerMenu />
                </span>
                <span className='capitalize ml-2'>All Categories</span>
                {/* Dropdown menu */}
                <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-dashed divide-gray-300 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
                    <Link to="/" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                        <img src={traditional} alt='chaniya-choli' className='w-10 h-10 rounded-3xl' />
                        <span className='ml-6 text-gray-700 text-sm'>Traditional</span>
                    </Link>
                    <Link to="/" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                        <img src={kurti} alt='chaniya-choli' className='w-10 h-10 rounded-3xl' />
                        <span className='ml-6 text-gray-700 text-sm'>Kurti</span>
                    </Link>
                    <Link to="/" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                        <img src={saree} alt='chaniya-choli' className='w-10 h-10 rounded-3xl' />
                        <span className='ml-6 text-gray-700 text-sm'>Saree</span>
                    </Link>
                    <Link to="/" className='flex items-center px-6 py-3 hover:bg-gray-100 transition'>
                        <img src={skirt} alt='chaniya-choli' className='w-10 h-10 rounded-3xl' />
                        <span className='ml-6 text-gray-700 text-sm'>Skirts</span>
                    </Link>
                </div>
            </div>
            {/* Other responsive navigation links */}
            <div className='flex flex-col items-center justify-between flex-grow pl-12'>
                <div className='flex flex-col items-center space-x-6'>
                    <Link to="/" className='text-gray-200 hover:text-white transition'>Home</Link>
                    <Link to="/" className='text-gray-200 hover:text-white transition'>Shop</Link>
                    <Link to="/" className='text-gray-200 hover:text-white transition'>About Us</Link>
                    <Link to="/" className='text-gray-200 hover:text-white transition'>Contact Us</Link>
                </div>
                <Link to="/" className='text-gray-200 hover:text-white transition'>Login/Register</Link>
            </div>
        </div>
    );
}

export default ResponsiveNavBar;

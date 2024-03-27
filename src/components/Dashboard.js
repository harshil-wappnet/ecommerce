import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/wappnet-log.png'
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoBag } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import traditional from '../assets/images/chaniya-choli.webp'
import kurti from '../assets/images/kurti.jpg'
import saree from '../assets/images/saree.avif'
import skirt from '../assets/images/skirt.jpg'
import { FaShippingFast } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FcCustomerSupport } from "react-icons/fc";
import kurti1 from '../assets/images/kurti1.webp';
import cc from '../assets/images/cc.webp'
import sareee from '../assets/images/sareee.avif'
import ResponsiveNavBar from './ResponsiveNavBar';

const Dashboard = () => {
    const [responsivenavbar, setResponsiveNavbar] = useState(false);

    return (
        <>
            <header className='py-4 shadow-sm lg:bg-white `responsivenavbar ? bg-gray-900 :`'>
                <div className='container flex items-center justify-between'>
                    <Link to="/">
                        <img src={logo} alt="Logo" className='w-32' />
                    </Link>

                    <div className='flex item-center space-x-4'>
                        <Link to="#" className='text-center text-gray-700 hover:text-primary transition relative flex-col items-center hidden lg:flex'>
                            <div className='text-3xl'>
                                <CiHeart />
                            </div>
                            <div className='text-xs leading-3'>
                                Wish List
                            </div>
                            <span className='absolute right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
                                8
                            </span>
                        </Link>
                        <Link to="#" className='hidden lg:flex text-center text-gray-700 hover:text-primary transition relative flex-col items-center'>
                            <div className='text-3xl'>
                                <IoBag />
                            </div>
                            <div className='text-xs leading-3'>
                                Cart
                            </div>
                            <span className='absolute -right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
                                8
                            </span>
                        </Link>
                        <Link to="#" className='hidden lg:flex text-center text-gray-700 hover:text-primary transition relative  flex-col items-center'>
                            <div className='text-3xl'>
                                <CiUser />
                            </div>
                            <div className='text-xs leading-3'>
                                Account
                            </div>
                        </Link>

                        <button onClick={() => setResponsiveNavbar(!responsivenavbar)} aria-controls="mobile-menu" aria-expanded="false"><GiHamburgerMenu className='lg:hidden items-end `responsivenavbar ? text-white : `' /></button>

                    </div>
                </div>
            </header>
            {responsivenavbar && (<div id="mobile-menu" className='bg-gray-900'>
                <ResponsiveNavBar />
            </div>)}
            {/* <Header /> */}
            <nav className='bg-gray-800 hidden lg:block'>
                <div className='container flex'>
                    <div className='px-8 py-4 bg-primary flex items-center cursor-pointer relative group'>
                        <span className='text-white'>
                            <GiHamburgerMenu />
                        </span>
                        <span className='capitalize ml-2'>All Categories</span>
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
                    <div className='flex items-center justify-between flex-grow pl-12'>
                        <div className='flex items-center space-x-6'>
                            <Link to="/" className='text-gray-200 hover:text-white transition'>Home</Link>
                            <Link to="/products" className='text-gray-200 hover:text-white transition'>Shop</Link>
                            <Link to="/" className='text-gray-200 hover:text-white transition'>About Us</Link>
                            <Link to="/" className='text-gray-200 hover:text-white transition'>Contact Us</Link>
                        </div>
                        <Link to="/" className='text-gray-200 hover:text-white transition'>Login/Register</Link>
                    </div>
                </div>
            </nav>
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
                <div className='w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center'>
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
                <div className='grid grid-cols-3 gap-3 category'>
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
        </>
    )
}

export default Dashboard

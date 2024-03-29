import React from 'react'
import { RiGridFill } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaSearch, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Productsdata from '../data/products'

const Shop = () => {
    return (
        <div className='container grid grid-cols-4 gap-6 pb-16 items-start'>
            <div className='col-span-1 bg-white px-4 pb-6 shadow rounded'>
                <div className='divide-y divide-gray-200 space-y-5'>
                    <div>
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Categories</h3>
                        <div className='space-y-2'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between w-full'>
                                    <input type="checkbox" id="casual" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="casual" className='text-gray-600 ml-3 cursor-pointer'>Casual</label>
                                    <span className='ml-auto text-gray-600 text-sm'>(215)</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <input type="checkbox" id="occasions" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="occasions" className='text-gray-600 ml-3 cursor-pointer'>Occasions</label>
                                    <span className='ml-auto text-gray-600 text-sm'>(15)</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <input type="checkbox" id="universal" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="universal" className='text-gray-600 ml-3 cursor-pointer'>Universal</label>
                                    <span className='ml-auto text-gray-600 text-sm'>(2115)</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <input type="checkbox" id="work" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="work" className='text-gray-600 ml-3 cursor-pointer'>Work</label>
                                    <span className='ml-auto text-gray-600 text-sm'>(115)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Brands</h3>
                        <div className='space-y-2'>
                            <div className='flex flex-col'>
                                <div className='flex items-center justify-between w-full'>
                                    <input type="checkbox" id="aarrah" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="aarrah" className='text-gray-600 ml-3 cursor-pointer'>AARRAH</label>
                                    <span className='ml-auto text-gray-600 text-sm'>(15)</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <input type="checkbox" id="afsana" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="afsana" className='text-gray-600 ml-3 cursor-pointer'>Afsana</label>
                                    <span className='ml-auto text-gray-600 text-sm'>(75)</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <input type="checkbox" id="anaita" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="anaita" className='text-gray-600 ml-3 cursor-pointer'>Anaita</label>
                                    <span className='ml-auto text-gray-600 text-sm'>(20)</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <input type="checkbox" id="blissta" className='text-primary focus:ring-0 rounded-sm cursor-pointer' />
                                    <label htmlFor="blissta" className='text-gray-600 ml-3 cursor-pointer'>Blissta</label>
                                    <span className='ml-auto text-gray-600 text-sm'>(10)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Price</h3>
                        <div className='mt-4 flex items-center'>
                            <input type='text' className='w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded' placeholder="min" />
                            <span className='mx-3 text-gray-500'> - </span>
                            <input type='text' className='w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded' placeholder="max" />
                        </div>
                    </div>

                    <div className='pt-4'>
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Size</h3>
                        <div className='flex items-center gap-2'>
                            <div className='size-selector'>
                                <input type='radio' name='size' className='hidden' id='size-xs' />
                                <label htmlFor='size-xs' className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>XS</label>
                            </div>
                            <div className='size-selector'>
                                <input type='radio' name='size' className='hidden' id='size-s' />
                                <label htmlFor='size-s' className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>S</label>
                            </div>
                            <div className='size-selector'>
                                <input type='radio' name='size' className='hidden' id='size-m' />
                                <label htmlFor='size-m' className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>M</label>
                            </div>
                            <div className='size-selector'>
                                <input type='radio' name='size' className='hidden' id='size-l' />
                                <label htmlFor='size-l' className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>L</label>
                            </div>
                            <div className='size-selector'>
                                <input type='radio' name='size' className='hidden' id='size-xl' />
                                <label htmlFor='size-xl' className='text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600'>XL</label>
                            </div>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Color</h3>
                        <div className='flex items-center gap-2'>
                            <div className='color-selector'>
                                <input type='radio' name="color" className='hidden' id="color-red" />
                                <label className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "#fc3d57" }} htmlFor='color-red'></label>
                            </div>
                            <div className='color-selector'>
                                <input type='radio' name="color" className='hidden' id="color-white" />
                                <label className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "#fff" }} htmlFor='color-white'></label>
                            </div>
                            <div className='color-selector'>
                                <input type='radio' name="color" className='hidden' id="color-black" />
                                <label className='border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block' style={{ backgroundColor: "#000" }} htmlFor='color-black'></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-3 '>
                <div className='flex items-center mb-4'>
                    <select className='w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary '>
                        <option>Default Sorting</option>
                        <option>Price low-high</option>
                        <option>Price high-low</option>
                        <option>Latest Product</option>
                    </select>
                    <div className='flex gap-2 ml-auto'>
                        <div className='border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer'>
                            <RiGridFill className='text-xl' />
                        </div>
                        <div className='border border-gray-300 w-10 h-9 flex items-center justify-center textgray-600 rounded cursor-pointer'>
                            <CiBoxList className='text-xl' />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-6'>
                    {Productsdata.map((product, index) => (
                        <div key={index} className='bg-white shadow rounded overflow-hidden group flex flex-col'>
                            <div className='relative flex-shrink-0'>
                                <img src={product.imageSrc} alt='' className='w-full' />
                                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>
                                    <Link to='/' className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>
                                        <FaSearch />
                                    </Link>
                                    <Link to='/' className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'>
                                        <CiHeart />
                                    </Link>
                                </div>
                            </div>
                            <div className='pt-4 pb-3 px-4 flex flex-col flex-grow'>
                                <Link to='/'>
                                    <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition overflow-hidden'>
                                        {product.title.length > 30 ? `${product.title.substring(0, 30)}...` : product.title}
                                    </h4>
                                </Link>
                                <div className='flex justify-between items-start mb-1'>
                                    <div>
                                        <p className='text-xl text-primary font-semibold '>{product.price}</p>
                                        <p className='text-sm text-gray-400 line-through'>{product.discountPrice}</p>
                                    </div>
                                    <div className='flex gap-1 text-sm text-yellow-400'>
                                        <span><FaStar /></span>
                                        <span><FaStar /></span>
                                        <span><FaStar /></span>
                                        <span><FaStar /></span>
                                        <span><FaStar /></span>
                                        <span className='text-xs text-gray-500'>(150)</span>
                                    </div>
                                </div>
                                <Link to={`/product-view/${product.id}`} className='self-start w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition mt-auto'>View Product</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Shop

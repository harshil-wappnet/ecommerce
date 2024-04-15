import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Productsdata from '../data/products';
// Import your CSS file for styling

const Products = () => {
    return (
        <div className='container pb-16'>
            <div className='products-container lg:products-container-nullify'>
                {Productsdata.map((product, index) => (
                    <div key={index} className='product-item'>
                        <div className='bg-white shadow rounded overflow-hidden  group flex flex-col'>
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
                                        {product.title.length > 25 ? `${product.title.substring(0, 25)}...` : product.title}
                                    </h4>
                                </Link>
                                <div className='flex justify-between items-start mb-1'>
                                    <div>
                                        <p className='text-xl text-primary font-semibold '>${product.price}.00</p>
                                        <p className='text-sm text-gray-400 line-through'>${product.discountPrice}.00</p>
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
                                <button className='self-start w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition mt-auto'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;



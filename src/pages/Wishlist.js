import React from 'react'
import { Link } from 'react-router-dom'
import dress from '../assets/images/dress.avif'
import { FaRegAddressCard } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/WishlistSlice'
import { useDispatch } from 'react-redux';
const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistItem = useSelector(state => state.wishlists.productsAddedToWishlist);
    return (
        <div className='container grid grid-cols-12 items-start gap-6 pt-4 pb-16'>
            <div className='col-span-3'>
                <div className='px-4 py-3 shadow flex items-center gap-4'>
                    <div className='flex-shrink-0'>
                        <img src={dress} alt="profile pic" className='rounded-full w-14 h-14 border border-gray-200 p-1 object-cover' />
                    </div>
                    <div className='flex-grow'>
                        <p className='text-gray-600'>Hello,</p>
                        <h4 className='text-gray-600 font-medium'>Raashi Khanna</h4>
                    </div>
                </div>
                <div className='mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600'>
                    <div className='space-y-1 pl-8'>
                        <Link to='/' className='relative text-primary block font-medium capitalize transition'>
                            <span className='absolute -left-8 top-1 text-base'><FaRegAddressCard /></span>
                            Manage account
                        </Link>
                        <Link to='/' className='relative hover:text-primary block capitalize transition'>
                            Profile info
                        </Link>
                        <Link to='/' className='relative hover:text-primary block capitalize transition'>
                            Manage address
                        </Link>
                        <Link to='/' className='relative hover:text-primary block capitalize transition'>
                            Change password
                        </Link>
                    </div>

                    <div className='space-y-1 pl-8 pt-4'>
                        <Link to='/' className='relative hover:text-primary block font-medium capitalize transition'>
                            <span className='absolute -left-8 top-1 text-base'><FaRegAddressCard /></span>
                            My Order History
                        </Link>
                        <Link to='/' className='relative hover:text-primary block capitalize transition'>
                            My Returns
                        </Link>
                        <Link to='/' className='relative hover:text-primary block capitalize transition'>
                            My Cancellations
                        </Link>
                        <Link to='/' className='relative hover:text-primary block capitalize transition'>
                            My Reviews
                        </Link>
                    </div>

                    <div className='space-y-1 pl-8 pt-4'>
                        <Link to='/' className='relative hover:text-primary block font-medium capitalize transition'>
                            <span className='absolute -left-8 top-1 text-base'><FaRegAddressCard /></span>
                            Payment Methods
                        </Link>
                        <Link to='/' className='relative hover:text-primary block capitalize transition'>
                            Vouchers
                        </Link>

                    </div>

                    <div className='space-y-1 pl-8 pt-4'>
                        <Link to='/' className='relative hover:text-primary block font-medium capitalize transition'>
                            <span className='absolute -left-8 top-1 text-base'><FaRegAddressCard /></span>
                            My WishList
                        </Link>
                    </div>

                    <div className='space-y-1 pl-8 pt-4'>
                        <Link to='/' className='relative hover:text-primary block font-medium capitalize transition'>
                            <span className='absolute -left-8 top-1 text-base'><FaRegAddressCard /></span>
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
            <div className='col-span-9 space-y-4'>
                {wishlistItem.map((item, index) => (
                    <div key={index} className='flex items-center justify-between gap-6 p-4 border border-gray-200 rounded'>
                        <div className='w-28 flex-shrink-0'>
                            <img src={item.imageSrc} alt='' className='w-full' />
                        </div>
                        <div className='w-1/3'>
                            <h2 className='text-gray-800 text-xl font-medium uppercase'>{item.title}</h2>
                            <p className='text-gray-500 text-sm'>
                                Availability: <span className={item.stockStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}>{item.stockStatus}</span>

                            </p>
                        </div>
                        <div className='text-primary text-lg font-semibold'>
                            ${item.price}.00
                        </div>
                        <Link to="/" className={`px-6 py-2 text-center text-sm text-white border rounded transition uppercase font-medium ${item.stockStatus === 'In Stock' ? 'bg-primary border-primary cursor-pointer hover:bg-transparent hover:text-primary' : 'bg-red-400 border-red-400 cursor-not-allowed'}`}>
                            Add to Cart
                        </Link>
                        <div className='text-gray-600 cursor-pointer hover:text-primary' onClick={() => { dispatch(removeFromWishlist({ index })) }} >
                            <FaTrashAlt />
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Wishlist

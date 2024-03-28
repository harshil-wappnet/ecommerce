import React from 'react'
import dress from '../assets/images/dress.avif'
import { Link } from 'react-router-dom'
import { FaRegAddressCard } from "react-icons/fa";

const Account = () => {
    return (
        <div className='container grid grid-cols-12 items-start gap-6 pt-4 pb-16 '>
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
            <div className='col-span-9 grid grid-cols-3 gap-4'>
                <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='font-medium text-gray-800 text-lg'>Personal Profile</h3>
                        <Link to='/' className='text-primary'>Edit</Link>
                    </div>
                    <div className='space-y-1'>
                        <h4 className='text-gray-700 font-medium'>Raashi Khanna</h4>
                        <p className='text-gray-800'>raashi@mail.com</p>
                        <p className='text-gray-800'>123 345-688</p>
                    </div>
                </div>

                <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='font-medium text-gray-800 text-lg'>Shipping Address</h3>
                        <Link to='/' className='text-primary'>Edit</Link>
                    </div>
                    <div className='space-y-1'>
                        <h4 className='text-gray-700 font-medium'>Raashi Khanna</h4>
                        <p className='text-gray-800'>321, Jivraj Park, Gadhediya Circle, California</p>
                        <p className='text-gray-800'>123 345-688</p>
                    </div>
                </div>

                <div className='shadow rounded bg-white px-4 pt-6 pb-8'>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='font-medium text-gray-800 text-lg'>Billing Address</h3>
                        <Link to='/' className='text-primary'>Edit</Link>
                    </div>
                    <div className='space-y-1'>
                        <h4 className='text-gray-700 font-medium'>Raashi Khanna</h4>
                        <p className='text-gray-800'>321, Jivraj Park, Gadhediya Circle, California</p>
                        <p className='text-gray-800'>123 345-688</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account

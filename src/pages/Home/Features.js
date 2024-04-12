import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FcCustomerSupport } from "react-icons/fc";
const Features = () => {
    return (
        <div className='container py-16'>
            <div className='w-10/12 grid lg:grid-cols-3 grid-cols-1 gap-6 mx-auto justify-center'>
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
    )
}

export default Features

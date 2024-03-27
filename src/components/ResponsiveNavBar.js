import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import traditional from '../assets/images/chaniya-choli.webp';
import kurti from '../assets/images/kurti.jpg';
import saree from '../assets/images/saree.avif';
import skirt from '../assets/images/skirt.jpg';

const ResponsiveNavBar = () => {
    return (
        <div className='container flex flex-col'>

            {/* Other responsive navigation links */}
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center '>
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</Link>
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Shop</Link>
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About Us</Link>
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact Us</Link>
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Wish List</Link>
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Cart</Link>
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Account</Link>
                </div>
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Login/Register</Link>
            </div>
        </div>
    );
}

export default ResponsiveNavBar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { FaAngleRight } from 'react-icons/fa';

const Breadcrumb = () => {
    const location = useLocation();

    // Logic to determine the element name based on the path
    let elementName = '';
    switch (location.pathname) {
        case '/':
            elementName = 'Home';
            break;
        case '/shop':
            elementName = 'Shop';
            break;
        case '/product-view':
            elementName = 'product-view';
            break;
        case '/login':
            elementName = 'Login';
            break;
        case '/account':
            elementName = 'Account';
            break;
        // Add more cases as needed
        default:
            elementName = 'Unknown Page';
            break;
    }

    // Hide breadcrumb when path is "Home"
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className="container py-4 flex items-center gap-3">
            <Link to="/" className='text-primary text-base'><MdHome /></Link>
            <span className='text-sm text-gray-400'>
                <FaAngleRight />
            </span>
            <p className='text-gray-600 font-medium'>{elementName}</p>
        </div>
    );
};

export default Breadcrumb;

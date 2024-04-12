import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Filters from './Filters';
import ProductsDisplay from './ProductsDisplay';
import SlideOver from '../../components/SlideOver';
import { addToWishlist } from '../../redux/WishlistSlice';
import Productsdata from '../../data/products';
import { RiGridFill } from "react-icons/ri";
const Shop = () => {
    const dispatch = useDispatch();
    const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategories([...selectedCategories, value]);
        } else {
            setSelectedCategories(selectedCategories.filter(category => category !== value));
        }
    };

    const handleBrandChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedBrands([...selectedBrands, value]);
        } else {
            setSelectedBrands(selectedBrands.filter(brand => brand !== value));
        }
    };

    const handleAddToWishlist = (productId) => {
        const product = Productsdata.find(product => product.id === productId);
        if (product) {
            dispatch(addToWishlist({ product }));
        }
    };

    // Function to filter products based on selected categories and brands
    const filterProducts = (products, selectedCategories, selectedBrands) => {
        // If no categories or brands are selected, return all products
        if (selectedCategories.length === 0 && selectedBrands.length === 0) {
            return products;
        }

        // Filter products based on selected categories and brands
        let filteredProducts = [...products];

        // Filter by selected categories
        if (selectedCategories.length > 0) {
            filteredProducts = filteredProducts.filter(product => selectedCategories.includes(product.category));
        }

        // Filter by selected brands
        if (selectedBrands.length > 0) {
            filteredProducts = filteredProducts.filter(product => selectedBrands.includes(product.brand));
        }

        return filteredProducts;
    };

    // Filter products based on selected categories and brands
    const filteredProducts = filterProducts(Productsdata, selectedCategories, selectedBrands);

    const handleSlideOverToggle = () => {
        setIsSlideOverOpen(!isSlideOverOpen);
    };

    return (
        <div className='md:container grid grid-cols-4 gap-6 pb-16 items-start'>
            <div className='sm:hidden md:block col-span-1 bg-white px-4 pb-6 shadow rounded filter-hidden'>
                <Filters handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />
            </div>

            <div className='col-span-4 md:col-span-3'>
                {/* Header and other UI elements */}
                <div className='flex items-center mb-4 justify-between'>
                    <select className='w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary '>
                        <option>Default Sorting</option>
                        <option>Price low-high</option>
                        <option>Price high-low</option>
                        <option>Latest Product</option>
                    </select>
                    {/* SlideOver component */}
                    <div>
                        <div
                            className='ml-auto border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer mr-3 md:hidden'
                            onClick={handleSlideOverToggle}
                        >
                            <RiGridFill className='text-xl' />
                        </div>
                        {isSlideOverOpen && (
                            <SlideOver
                                handleCategoryChange={handleCategoryChange}
                                selectedCategories={selectedCategories}
                                onClose={() => setIsSlideOverOpen(false)}
                            />
                        )}
                    </div>
                </div>
                <ProductsDisplay filteredProducts={filteredProducts} handleAddToWishlist={handleAddToWishlist} />
            </div>
        </div>
    );
};

export default Shop;

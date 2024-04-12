import React, { useState } from 'react'

const Filters = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategories([...selectedCategories, value]);
        } else {
            setSelectedCategories(selectedCategories.filter(category => category !== value));
        }
    };
    return (
        <div className='sm:hidden md:block col-span-1 bg-white px-4 pb-6 shadow rounded filter-hidden'>
            <div className='divide-y divide-gray-200 space-y-5'>
                <div>
                    <h3 className='text-xl text-gray-800 mb-3 uppercase font-medium'>Categories</h3>
                    <div className='space-y-2'>
                        <div className='flex flex-col'>
                            {/* Category checkboxes */}
                            {['casual', 'occasions', 'universal', 'work'].map((category, index) => (
                                <div key={index} className='flex items-center justify-between w-full'>
                                    <input
                                        type="checkbox"
                                        id={category}
                                        value={category}
                                        className='text-primary focus:ring-0 rounded-sm cursor-pointer'
                                        onChange={handleCategoryChange}
                                        checked={selectedCategories.includes(category)}
                                    />
                                    <label htmlFor={category} className='text-gray-600 ml-3 cursor-pointer'>{category}</label>
                                    {/* You can include a count of products in each category here */}
                                    {category === 'casual' && <span className='ml-auto text-gray-600 text-sm'>(215)</span>}
                                    {category === 'occasions' && <span className='ml-auto text-gray-600 text-sm'>(15)</span>}
                                    {category === 'universal' && <span className='ml-auto text-gray-600 text-sm'>(2115)</span>}
                                    {category === 'work' && <span className='ml-auto text-gray-600 text-sm'>(115)</span>}
                                </div>
                            ))}
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
    )
}

export default Filters

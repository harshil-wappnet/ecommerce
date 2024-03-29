import React, { useState } from 'react'
import dress from '../assets/images/dress.avif';
import dressview1 from '../assets/images/dress-view-1.avif'
import dressview2 from '../assets/images/dress-view-2.avif'
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Products from '../components/Products';
import Productsdata from '../data/products';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/ProductsSlice';
const ProductView = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams(); // Get product ID from URL
    const dispatch = useDispatch();

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }


    const product = Productsdata.find(product => product.id === id);

    // Check if product exists
    if (!product) {
        return <div>Product not found!</div>;
    };
    const handleAddToCart = () => {
        dispatch(addToCart({ product, quantity }));
        alert(`Product added to cart:\nTitle: ${product.title}\nPrice: ${product.price}\nQuantity: ${quantity}`);
    };
    return (
        <>
            <div className='container grid grid-cols-2 gap-6'>
                <div>
                    <img src={product.imageSrc} alt='outfit-1' className='w-full h-96' />
                    <div className='grid grid-cols-5 gap-4 mt-4'>
                        <img src={dressview1} alt='' className='w-full cursor-pointer border border-primary' />
                        <img src={dressview2} alt='' className='w-full cursor-pointer border ' />
                        <img src={dress} alt='' className='w-full cursor-pointer border ' />
                        <img src={dressview2} alt='' className='w-full cursor-pointer border ' />
                        <img src={dressview1} alt='' className='w-full cursor-pointer border ' />
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-medium uppercase mb-2'>{product.title}</h2>
                    <div className='flex items-center mb-4'>
                        <div className='flex gap-1 text-sm text-yellow-400'>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                        </div>
                        <div className='text-xs text-gray-500 ml-3'>(150 reviews)</div>
                    </div>
                    <div className='sapce-y-2'>
                        <p className='text-gray-800 font-semibold space-x-2'>
                            <span>Avaliability:</span>
                            <span className='text-green-600'>In stock</span>
                        </p>
                        <p className=' space-x-2'>
                            <span className='text-gray-800 font-semibold'>Brand:</span>
                            <span className='text-green-600'>Apex</span>
                        </p>
                        <p className=' space-x-2'>
                            <span className='text-gray-800 font-semibold'>Category:</span>
                            <span className='text-green-600'>Dress</span>
                        </p>
                        <p className='d space-x-2'>
                            <span className='text-gray-800 font-semibold'>SKU:</span>
                            <span className='text-green-600'>BE45VRGT</span>
                        </p>
                    </div>
                    <div className='flex items-baseline mb-1 space-x-2 mt-4'>
                        <p className='text-2xl text-primary font-semibold'>{product.price}</p>
                        <p className='text-base line-through text-gray-400'>{product.discountPrice}</p>
                    </div>
                    <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <div className='pt-4'>
                        <h3 className='text-sm text-gray-800 uppercase mb-1'>Size</h3>
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
                        <h3 className='text-sm text-gray-800 uppercase mb-1'>Color</h3>
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

                    <div className='mt-4'>
                        <h3 className='text-sm text-gray-800 uppercase mb-1'>Quantity</h3>
                        <div className='flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max'>
                            <div onClick={decrementQuantity} className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>-</div>
                            <div className='h-8 w-8 text-base flex items-center justify-center'>{quantity}</div>
                            <div onClick={incrementQuantity} className='h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none'>+</div>
                        </div>
                    </div>

                    <div className='flex gap-3 border-b border-gray-200 pb-5 mt-6'>
                        <button onClick={() => handleAddToCart(product)} className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition ">
                            <FaShoppingCart />Add to Cart
                        </button>
                        <Link to="/" className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2  hover:text-primary transition ">
                            <FaHeart />WishList
                        </Link>
                    </div>

                    <div className='flex gap-3 mt-4'>
                        <Link to='/' className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center'>
                            <TfiFacebook />
                        </Link>
                        <Link to='/' className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center'>
                            <FaTwitter />
                        </Link>
                        <Link to='/' className='text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center'>
                            <FaInstagram />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='container pb-16'>
                <h3 className='border-b border-gray-200 text-gray-800 pb-3 font-medium'>Product Details</h3>
                <div className='w-3/5 pt-3'>
                    <div className='text-gray-600 space-y-3'>
                        <p>It's really quick! We strive to deliver all our orders / products in the fastest time possible. Depending upon your address, the delivery time may vary between 2 - 9 working days. That still won't stop us from trying to get you your order faster. On each product's display page, you can enter your location's pin code to check when you can expect to receive the delivery.</p>
                        <p>It's really quick! We strive to deliver all our orders / products in the fastest time possible. Depending upon your address, the delivery time may vary between 2 - 9 working days. That still won't stop us from trying to get you your order faster. On each product's display page, you can enter your location's pin code to check when you can expect to receive the delivery.</p>
                        <p>It's really quick! We strive to deliver all our orders / products in the fastest time possible. Depending upon your address, the delivery time may vary between 2 - 9 working days. That still won't stop us from trying to get you your order faster. On each product's display page, you can enter your location's pin code to check when you can expect to receive the delivery.</p>
                    </div>
                    <table className='table-auto border-collapse w-full text-gray-600 text-sm text-left mt-6'>
                        <tr>
                            <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>Color</th>
                            <td className='py-2 px-4 border border-gray-300'>Black, Pruple</td>
                        </tr>
                        <tr>
                            <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>Material</th>
                            <td className='py-2 px-4 border border-gray-300'>Artificial Leather</td>
                        </tr>
                        <tr>
                            <th className='py-2 px-4 border border-gray-300 w-40 font-medium'>Machine Wash</th>
                            <td className='py-2 px-4 border border-gray-300'>Yes</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className='container'>
                <h2 className='text-2xl font-medium text-gray-800 uppercase mb-6'>Related Products</h2>
            </div>
            <Products />
        </>
    )
}

export default ProductView

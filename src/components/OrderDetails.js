import React from 'react'
import { useSelector } from 'react-redux';
import { cartTotal } from '../redux/ProductsSlice';
import { Link } from 'react-router-dom';

const OrderDetails = () => {
    const cartItems = useSelector(state => state.products.productsAddedToCart);
    const cartTotals = useSelector(cartTotal);

    const loadScript = (src) => {
        return new Promise((resovle) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resovle(true);
            };

            script.onerror = () => {
                resovle(false);
            };

            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async (amount) => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("You are offline... Failed to load Razorpay SDK");
            return;
        }

        const options = {
            key: "rzp_test_bYKXi5ovwdyjuq",
            currency: "INR",
            amount: amount * 100,
            name: "Code with akky",
            description: "Thanks for purchasing",
            image:
                "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert("Payment Successfully");
            },
            prefill: {
                name: "code with akky",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    return (
        <div>
            <div className='space-y-4'>
                {/* Render each cart item */}
                <h3 className='text-lg font-medium capitalize mb-4 mt-2'>{cartItems.length === 0 ? "Your Cart is Empty!" : "Order Details"}</h3>
                {cartItems.map((item, index) => (
                    <div key={index} className='flex items-center gap-6 p-4 border border-gray-200 rounded'>
                        <div className='w-28 flex-shrink-0'>
                            <img src={item.imageSrc} alt='' className='w-full' />
                        </div>
                        <div>
                            <h5 className='text-gray-800 font-medium'>{item.title.length > 30 ? `${item.title.substring(0, 24)}...` : item.title}</h5>
                            <p className='text-sm text-gray-600'>Price: {item.price}</p>
                            <p className='text-sm text-gray-600'>Quantity: {item.quantity}</p>
                            <p className='text-sm text-gray-600'>SubTotal: {item.total}</p>
                        </div>
                    </div>
                ))}
                <div className='flex justify-between uppercase text-gray-800 font-medium my-3'>
                    <p className='font-semibold'>Total</p>
                    <p>${cartTotals}</p>
                </div>
                <div className='flex items-center mb-4 mt-2'>
                    <input id="agreement" type="checkbox" className='text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3' />
                    <label htmlFor="agreement" className='text-gray-600 ml-3 cursor-pointer text-sm'>Agree to our <Link to="/" className="text-primary">terms & conditions</Link></label>
                </div>
                <button onClick={() => displayRazorpay(cartTotals)} className='w-full block px-4 py-3 text-center text-white font-medium bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition'>Place order</button>
            </div>
        </div>
    )
}

export default OrderDetails

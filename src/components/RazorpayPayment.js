import React, { useRef } from 'react';
import Razorpay from 'razorpay';

const RazorpayPayment = () => {
  const razorpayRef = useRef(null);

  const handlePaymentSuccess = (response) => {
    console.log('Payment Successful:', response);
    // You can handle further actions after successful payment here
  };

  const handlePaymentButtonClick = () => {
    const razorpay = new Razorpay({
      key_id: 'rzp_test_bYKXi5ovwdyjuq', // Replace with your Razorpay key
      key_secret: 'shDTzHBEpaQ7q3ho8vGrVD5p',
      amount: 100, // Amount in smallest currency unit (e.g., paisa in INR)
      currency: 'INR', // Currency code
      name: 'Your Company Name', // Your company name
      description: 'Purchase Description', // Purchase description
      image: 'logo.png', // URL or Base64 encoded image
      handler: handlePaymentSuccess,
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9876543210'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#F37254' // Razorpay button color
      }
    });

    razorpay.open();
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <button onClick={handlePaymentButtonClick}>Pay Now</button>
    </div>
  );
};

export default RazorpayPayment;

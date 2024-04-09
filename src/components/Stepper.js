import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../redux/ProductsSlice';
import DeliveryDetails from '../components/DeliveryDetails';
import OrderDetails from '../components/OrderDetails';
import PostOrderPage from '../components/PostOrderPage';
import { cartTotal } from '../redux/ProductsSlice';

const Stepper = () => {
    const steps = ["1", "2", "3"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const [step1Filled, setStep1Filled] = useState(false); // Track if step 1 form has been filled
    const [movedToStep2, setMovedToStep2] = useState(false); // Track if user has already moved to step 2
    const cartTotals = useSelector(cartTotal);
    const dispatch = useDispatch();
    const customerDetails = useSelector(state => state.customers.customerDetails);
    console.log(customerDetails);

    // useEffect(() => {
    //     // Check if step 1 form has been filled when component mounts
    //     if (customerDetails && Object.values(customerDetails).some(value => value === "")) {
    //         setStep1Filled(false); // If any field is empty string, set step1Filled to false
    //     } else {
    //         setStep1Filled(true);
    //     }
    // }, [customerDetails]);

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async (amount) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

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
            image: "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert("Payment Successfully");
                setComplete(true);
            },
            prefill: {
                name: "code with akky",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const handleNext = () => {
        if (currentStep === 2) {
            // Execute loadScript and displayRazorpay only for step 2
            // For other steps, proceed as usual
            displayRazorpay(cartTotals);
            setMovedToStep2(true); // Set movedToStep2 to true when moving to step 2
        }

        setCurrentStep((prev) => prev + 1);
    };

    const handleReset = () => {
        // Dispatch your reset method here
        dispatch(reset());
        setStep1Filled(false); // Reset step 1 form filled state
        setMovedToStep2(false); // Reset movedToStep2 state
    };

    return (
        <>
            <div className="flex items-center justify-center">
                {steps?.map((item, i) => (
                    <div
                        key={i}
                        className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"
                            } `}
                    >
                        <div className="step">
                            {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
                        </div>
                    </div>
                ))}
            </div>
            <hr className="mt-4 text-gray-700" />
            {currentStep === 1 && !complete && !step1Filled &&
                <div className='col-span-8 border border-red-200 p-4 rounded'>
                    <DeliveryDetails />
                </div>}
            {currentStep === 2 && !complete && (step1Filled || movedToStep2) && <OrderDetails />}
            {currentStep === 3 && !complete && <PostOrderPage />}
            {!complete && (
                <button
                    className="btn bg-primary border border-primary rounded-md px-4 py-3 text-center text-white font-medium mt-4 ml-4"
                    onClick={() => {
                        if (currentStep === steps.length) {
                            // If it's the last step and the form is complete, dispatch the reset method
                            handleReset();
                        } else {
                            handleNext(); // Call handleNext for other steps
                        }
                    }}
                >
                    {currentStep === steps.length ? "Finish" : "Next"}
                </button>
            )}
        </>
    );
};

export default Stepper;

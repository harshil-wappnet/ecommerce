import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../redux/ProductsSlice';
import { resetDeliverydetails } from '../redux/DeliveryDetailSlice';
import { resetWishlist } from '../redux/WishlistSlice';
import DeliveryDetails from '../components/DeliveryDetails';
import OrderDetails from '../components/OrderDetails';
import PostOrderPage from '../components/PostOrderPage';
import { cartTotal } from '../redux/ProductsSlice';

const Stepper = () => {
    const steps = ["1", "2", "3"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const cartTotals = useSelector(cartTotal);
    const transactionStatus = useSelector(state => state.customers.transactionStatus)
    const dispatch = useDispatch();
    const formFilledStatus = useSelector(state => state?.customers?.formFilledStatus);

    useEffect(() => {
        if (formFilledStatus) {
            setCurrentStep(2); // Move to step 2 if form is filled
        } else {
            setCurrentStep(1); // Otherwise, stay at step 1
        }
    }, [formFilledStatus]);

    useEffect(() => {
        if (transactionStatus) {
            setCurrentStep(3); // Move to step 3 if transaction status is true
        }
    }, [transactionStatus]);

    const handleNext = () => {
        if (currentStep < 3 && formFilledStatus) {
            setCurrentStep(prevStep => prevStep + 1);
        }
    };

    const handleReset = () => {
        dispatch(reset());
        dispatch(resetDeliverydetails());
        dispatch(resetWishlist());
    };

    const handleNextStep = () => {
        if (currentStep === 1) {
            // If it's step 1, move to step 2 only if form is filled
            if (formFilledStatus) {
                setCurrentStep(2);
            }
        } else if (currentStep === 2) {
            // If it's step 2, move to step 3
            setCurrentStep(3);
        }
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
            {currentStep === 1 && !complete &&
                <div className='col-span-8 border border-red-200 p-4 rounded'>
                    {!formFilledStatus && <DeliveryDetails onNext={handleNextStep} />}
                    {formFilledStatus && <OrderDetails />}
                </div>}
            {currentStep === 2 && !complete && <div className='col-span-8 border border-red-200 p-4 rounded'><OrderDetails /></div>}
            {currentStep === 3 && !complete && <div className='col-span-8 border border-red-200 p-4 rounded'>
                <PostOrderPage />
            </div>}
            {/* Hide Next button for step 2 */}
            {currentStep === 2 && !complete ? null : (
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
                    // Conditionally render the "Next" button based on formFilledStatus for step 1
                    style={{ display: currentStep === 1 && !formFilledStatus ? 'none' : 'inline-block' }}
                >
                    {currentStep === steps.length ? "Finish" : "Next"}
                </button>
            )}
        </>
    );
};

export default Stepper;

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
    const cartTotals = useSelector(cartTotal);
    const dispatch = useDispatch();
    const formFilledStatus = useSelector(state => state?.customers?.formFilledStatus);

    // useEffect to update currentStep based on formFilledStatus
    useEffect(() => {
        if (formFilledStatus) {
            setCurrentStep(2); // Move to step 2 if form is filled
        } else {
            setCurrentStep(1); // Otherwise, stay at step 1
        }
    }, [formFilledStatus]);

    // Function to handle moving to the next step
    const handleNext = () => {
        // If not in step 3 and form is filled, move to the next step
        if (currentStep < 3 && formFilledStatus) {
            setCurrentStep(prevStep => prevStep + 1);
        }
    };

    // Function to reset the stepper state
    const handleReset = () => {
        dispatch(reset());
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
                    {!formFilledStatus && <DeliveryDetails />}
                    {formFilledStatus && <OrderDetails />}
                </div>}
            {currentStep === 2 && !complete && <div className='col-span-8 border border-red-200 p-4 rounded'><OrderDetails /></div>}
            {currentStep === 3 && !complete && <div className='col-span-8 border border-red-200 p-4 rounded'>
                <PostOrderPage />
            </div>}
            {currentStep === 1 && !complete && !formFilledStatus ? null : (
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

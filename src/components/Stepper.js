import React, { useState } from "react";
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
    const formFilledStatus = useSelector(state => state?.customers?.formFilledStatus);
    console.log("cartitemmmmm", formFilledStatus)

    // Function to handle moving to the next step
    const handleNext = () => {
        if (currentStep === 2) {
            // If moved to step 2 already, set current step to 3
            setCurrentStep(3);
            return;
        }

        // If step 1 form is filled and not moved to step 2 yet, move to step 2
        if (step1Filled && !movedToStep2) {
            setCurrentStep(2);
            setMovedToStep2(true); // Set movedToStep2 to true when moving to step 2
            return;
        }

        // If not in step 2 or 3, move to the next step
        setCurrentStep(prevStep => prevStep + 1);
    };

    // Function to reset the stepper state
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
            {currentStep === 1 && !complete &&
                <div className='col-span-8 border border-red-200 p-4 rounded'>
                    {!step1Filled && <DeliveryDetails onNext={() => setStep1Filled(true)} />}
                    {step1Filled && <OrderDetails />}
                </div>}
            {currentStep === 2 && !complete && <div className='col-span-8 border border-red-200 p-4 rounded'><OrderDetails /></div>}
            {currentStep === 3 && !complete && <div className='col-span-8 border border-red-200 p-4 rounded'>
                <PostOrderPage />
            </div>}
            {currentStep === 1 && !complete && !step1Filled ? null : (
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

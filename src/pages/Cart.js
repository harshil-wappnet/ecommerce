import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import Stepper from '../components/Stepper';
const Cart = () => {
    const formFilledStatus = useSelector(state => state?.customers?.formFilledStatus);
    const [activeStep, setActiveStep] = useState(1);

    // useEffect to update activeStep based on formFilledStatus
    useEffect(() => {
        if (formFilledStatus) {
            setActiveStep(2); // Move to step 2 if form is filled
        } else {
            setActiveStep(1); // Otherwise, stay at step 1
        }
    }, [formFilledStatus]);

    return (
        <>
            <div className='container grid  items-start pb-16 pt-4 gap-6'>
                <div className="items-center justify-center">
                    <Stepper activeStep={activeStep} />
                </div>
            </div>
        </>
    )
}

export default Cart

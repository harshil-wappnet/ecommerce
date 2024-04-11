import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormFilledStatus, updateCustomerDetails } from '../redux/DeliveryDetailSlice';

const DeliveryDetails = ({ onNext }) => {
    const dispatch = useDispatch();
    const customerDetails = useSelector(state => state.customers.customerDetails);

    // Initialize formDetails state based on Redux state or initial state
    const [formDetails, setFormDetails] = useState({
        firstName: customerDetails.firstName || '', // Use Redux state if available
        lastName: customerDetails.lastName || '',
        country: customerDetails.country || '',
        address: customerDetails.address || '',
        city: customerDetails.city || '',
        postalCode: customerDetails.postalCode || '',
        phoneNumber: customerDetails.phoneNumber || '',
        emailAddress: customerDetails.emailAddress || '',
    });

    // Effect to update formDetails when customerDetails changes
    useEffect(() => {
        setFormDetails({
            firstName: customerDetails.firstName || '',
            lastName: customerDetails.lastName || '',
            country: customerDetails.country || '',
            address: customerDetails.address || '',
            city: customerDetails.city || '',
            postalCode: customerDetails.postalCode || '',
            phoneNumber: customerDetails.phoneNumber || '',
            emailAddress: customerDetails.emailAddress || '',
        });
    }, [customerDetails]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const allFieldsFilled = Object.values(formDetails).every(field => field.trim() !== '');
        if (allFieldsFilled) {
            dispatch(updateCustomerDetails(formDetails));
            dispatch(setFormFilledStatus(true));
            onNext(); // Call the onNext function passed from the parent component
        } else {
            // Handle the case where not all fields are filled
            alert('Please fill in all required fields');
        }
    };

    // Function to determine if the submit button should be disabled
    const isSubmitDisabled = Object.values(formDetails).some(field => field.trim() === '');

    return (
        <div className='container'>
            <h3 className='text-lg font-medium capitalize mb-4 mt-2'>CheckOut</h3>
            <div className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label className='text-gray-600 mb-2 block'>First Name<span className='text-primary'>*</span></label>
                        <input type="text" className='input-box' name="firstName" value={formDetails.firstName} onChange={handleChange} />
                    </div>
                    <div>
                        <label className='text-gray-600 mb-2 block'>Last Name<span className='text-primary'>*</span></label>
                        <input type="text" className='input-box' name="lastName" value={formDetails.lastName} onChange={handleChange} />
                    </div>
                </div>
                <div>
                    <label className='text-gray-600 mb-2 block'>Country/Region<span className='text-primary'>*</span></label>
                    <input type="text" className='input-box' name="country" value={formDetails.country} onChange={handleChange} />
                </div>
                <div>
                    <label className='text-gray-600 mb-2 block'>Street/Address<span className='text-primary'>*</span></label>
                    <input type="text" className='input-box' name="address" value={formDetails.address} onChange={handleChange} />
                </div>
                <div>
                    <label className='text-gray-600 mb-2 block'>Town/City<span className='text-primary'>*</span></label>
                    <input type="text" className='input-box' name="city" value={formDetails.city} onChange={handleChange} />
                </div>
                <div>
                    <label className='text-gray-600 mb-2 block'>Postal Code<span className='text-primary'>*</span></label>
                    <input type="text" className='input-box' name="postalCode" value={formDetails.postalCode} onChange={handleChange} />
                </div>
                <div>
                    <label className='text-gray-600 mb-2 block'>Phone Number<span className='text-primary'>*</span></label>
                    <input type="text" className='input-box' name="phoneNumber" value={formDetails.phoneNumber} onChange={handleChange} />
                </div>
                <div>
                    <label className='text-gray-600 mb-2 block'>Email Address<span className='text-primary'>*</span></label>
                    <input type="text" className='input-box' name="emailAddress" value={formDetails.emailAddress} onChange={handleChange} />
                </div>
                <button className={`btn bg-primary border border-primary rounded-md px-4 py-3 text-center text-white font-medium mt-4 ml-4 ${isSubmitDisabled ? 'disabled' : ''}`} onClick={handleSubmit} disabled={isSubmitDisabled}>Submit</button>
            </div>
        </div>
    );
};

export default DeliveryDetails;

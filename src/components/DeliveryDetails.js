import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCustomerDetails } from '../redux/DeliveryDetailSlice';
import { initialState } from '../redux/DeliveryDetailSlice';
const DeliveryDetails = () => {
    const dispatch = useDispatch();
    const customerDetails = useSelector(state => state.deliveryDetails);
    const [formDetails, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        country: '',
        address: '',
        city: '',
        postalCode: '',
        phoneNumber: '',
        emailAddress: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

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

            </div>
        </div>
    )
}

export default DeliveryDetails

import { createSlice } from '@reduxjs/toolkit';

export const initialState = [
    {
        firstName: '',
        lastName: '',
        country: '',
        address: '',
        city: '',
        postalCode: '',
        phoneNumber: '',
        emailAddress: '',
    }
];

const deliveryDetailSlice = createSlice({
    name: 'deliveryDetails',
    initialState,
    reducers: {
        updateCustomerDetails(state, action) {
            // Update customer details with payload
            state.customerDetails = action.payload;
        },
        resetCustomerDetails(state) {
            // Reset customer details to initial state
            state.customerDetails = initialState.customerDetails;
        },
    }
});

export const { updateCustomerDetails, resetCustomerDetails } = deliveryDetailSlice.actions;

export default deliveryDetailSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customerDetails: {
        firstName: '',
        lastName: '',
        country: '',
        address: '',
        city: '',
        postalCode: '',
        phoneNumber: '',
        emailAddress: '',
    },
    formFilledStatus: false, // Initialize formFilledStatus to false
    transactionStatus: false,
};

const deliveryDetailSlice = createSlice({
    name: 'deliveryDetails',
    initialState,
    reducers: {
        updateCustomerDetails(state, action) {
            // Update customer details with payload
            state.customerDetails = {
                ...action.payload,
            };
            // Set formFilledStatus to true when customer details are updated
        },
        setFormFilledStatus(state, action) {
            console.log("action", action)
            console.log("state", state)
            state.formFilledStatus = action.payload;

        },
        resetCustomerDetails(state) {
            // Reset customer details to initial state
            state.customerDetails = { ...initialState.customerDetails };
            state.formFilledStatus = false; // Reset formFilledStatus to false
        },
        updateTransactionStatus(state) {
            state.transactionStatus = true;
        },
        resetDeliverydetails: () => initialState,
    }
});


export const { updateCustomerDetails, resetCustomerDetails, setFormFilledStatus, updateTransactionStatus, resetDeliverydetails } = deliveryDetailSlice.actions;

export default deliveryDetailSlice.reducer;

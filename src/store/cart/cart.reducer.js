import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isDropdownOpen: false,
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        setDropdownOpen: (state, action) => {
            state.isDropdownOpen = action.payload
        },
        setCartItems: (state, action) => {
            state.cartItems = action.payload;
        }
    }
});

export const {setDropdownOpen, setCartItems} = cartSlice.actions;
export default cartSlice.reducer;
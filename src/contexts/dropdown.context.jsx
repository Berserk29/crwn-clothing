import { createContext, useReducer} from "react";

import { createAction } from '../utiles/reducer/reducer.utiles'

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) =>
    cartItem.id === productToAdd.id);

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
}

const subtractCartItem = (cartItems, productToSubtract) => {
    const existingCartItem = cartItems.find((cartItem) => 
    cartItem.id === productToSubtract.id);
    
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToSubtract.id )
    }

    return cartItems.map((cartItem) => cartItem.id === productToSubtract.id ?
    {...cartItem, quantity: cartItem.quantity - 1} : cartItem );
    
}

const removeCartItem = (cartItems, productToRemove) => 
cartItems.filter((cartItem) => cartItem.id !== productToRemove.id )

export const DropdownContext = createContext({
    isDropdownOpen: false,
    setDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    subtractItemToCart: () => {},
    removeItemToCart: () => {},
    cartItemsCount: 0,
    cartTotalPrice: 0
});


export const CART_ACTION_TYPES = {
    SET_DROPDOWN_OPEN: 'SET_DROPDOWN_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
}

const INITIAL_STATE = {
    isDropdownOpen: false,
    cartItems: [],
    cartItemsCount: 0,
    cartTotalPrice: 0
};


const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch(type){
        case CART_ACTION_TYPES.SET_DROPDOWN_OPEN:
            return {
                ...state,
                isDropdownOpen: payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }  
        default: 
        throw new Error(`Unhandled type ${type} in cartReducer`)    
    }
}

export const DropdownProvider = ({children}) => {
    const [{cartTotalPrice, cartItemsCount, cartItems, isDropdownOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    
    const setDropdown = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_DROPDOWN_OPEN, bool))
    };

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((acc, curEl) => acc + curEl.quantity, 0);
        
        const newCartPriceTotal = newCartItems.reduce((acc, curEl) => acc + (curEl.quantity * curEl.price), 0);
        
        dispatch(createAction( CART_ACTION_TYPES.SET_CART_ITEMS, 
            { 
                cartItems: newCartItems,
                cartTotalPrice: newCartPriceTotal,
                cartItemsCount: newCartCount
            })
        )
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };

    const subtractItemToCart = (productToSubtract) => {
        const newCartItems = subtractCartItem(cartItems, productToSubtract);
        updateCartItemsReducer(newCartItems);
    };

    const removeItemToCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    };


    const value = {
        isDropdownOpen,
        setDropdown,
        addItemToCart,
        subtractItemToCart,
        removeItemToCart,
        cartItems,
        cartItemsCount,
        cartTotalPrice
    };

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
} 

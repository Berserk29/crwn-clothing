import { setDropdownOpen, setCartItems, setCartEmpty } from "./cart.reducer";


// HELPER FUNCTION
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


// ACTION FUNCTION TO EXPORT FOR DISPATCH
export const setDropdown = (bool) => {
    return setDropdownOpen(bool)
};

export const setCartEmptyAction = () => {
    return setCartEmpty()
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};

export const subtractItemToCart = (cartItems, productToSubtract) => {
    const newCartItems = subtractCartItem(cartItems, productToSubtract);
    return setCartItems(newCartItems);
};

export const removeItemToCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return setCartItems(newCartItems);
};
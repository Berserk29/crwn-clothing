import { createContext, useState, useEffect} from "react";

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


export const DropdownProvider = ({children}) => {
    const [isDropdownOpen, setDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);


    useEffect(() => {
        const totalCartItems = cartItems.reduce((acc, curEl) => acc + curEl.quantity, 0);
        setCartItemsCount(totalCartItems);
    }, [cartItems]);
    
    useEffect(() => {
        const totalCartPrice = cartItems.reduce((acc, curEl) => acc + (curEl.quantity * curEl.price), 0);
        setCartTotalPrice(totalCartPrice)
    }, [cartItems])
    

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const subtractItemToCart = (productToSubtract) => {
        setCartItems(subtractCartItem(cartItems, productToSubtract))
    }

    const removeItemToCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

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

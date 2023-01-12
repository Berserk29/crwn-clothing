import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { DropdownContext } from '../../contexts/dropdown.context';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import {
    CartDropdownContainerCss,
    CartItemsCss,
    EmptyMessageCss,
} from './cart-dropdown.style.jsx';

const CartDropdown = () => {
    const {cartItems, isDropdownOpen, setDropdown} = useContext(DropdownContext);
    const navigate = useNavigate();

    const goToCheckoutHandle = () => {
        navigate('/checkout')
        // Close the dropdown menu after clicking Checkout
        setDropdown(!isDropdownOpen)  
    }

    return(
        <CartDropdownContainerCss>
            <CartItemsCss>
                {
                cartItems.length ? (cartItems.map(el =>
                <CartItem cartItem={el} key={el.id}/>)) :
                ( <EmptyMessageCss>Your cart is empty</EmptyMessageCss> )
                }
            </CartItemsCss>
            <Button onClick={goToCheckoutHandle}>CHECKOUT</Button>
        </CartDropdownContainerCss>
    )
}

export default CartDropdown;
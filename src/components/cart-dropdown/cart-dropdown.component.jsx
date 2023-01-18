import { useSelector, useDispatch  } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setDropdown } from '../../store/cart/cart.action';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import {
    CartDropdownContainerCss,
    CartItemsCss,
    EmptyMessageCss,
} from './cart-dropdown.style.jsx';

const CartDropdown = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isDropdownOpen = useSelector(selectIsCartOpen);
    const cartItems = useSelector(selectCartItems);

    const goToCheckoutHandle = () => {
        navigate('/checkout')
        // Close the dropdown menu after clicking Checkout
        dispatch(setDropdown(!isDropdownOpen))  
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
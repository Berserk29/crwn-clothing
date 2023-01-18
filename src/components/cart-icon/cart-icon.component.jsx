import { useSelector, useDispatch } from 'react-redux';

import { setDropdown } from '../../store/cart/cart.action';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';

import {
    CartIconContainerCss,
    ShoppingIconCss,
    ItemCountCss
} from './cart-icon.style.jsx';

const CartIcon = () => {
    const dispatch = useDispatch();

    const isDropdownOpen = useSelector(selectIsCartOpen)
    const cartItemsCount = useSelector(selectCartCount)

    // The way of doing the toggle! (!false -> true)  (!true -> false) 
    const dropdownHandler = () => dispatch(setDropdown(!isDropdownOpen));
    

    return (
        <CartIconContainerCss onClick={dropdownHandler}>
            <ShoppingIconCss/>
            <ItemCountCss>{cartItemsCount}</ItemCountCss>
        </CartIconContainerCss>
    )
}

export default CartIcon;
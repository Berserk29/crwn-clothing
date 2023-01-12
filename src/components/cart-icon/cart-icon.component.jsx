import { useContext } from 'react';

import { DropdownContext } from '../../contexts/dropdown.context';

import {
    CartIconContainerCss,
    ShoppingIconCss,
    ItemCountCss
} from './cart-icon.style.jsx';

const CartIcon = () => {
    const { isDropdownOpen , setDropdown , cartItemsCount } = useContext(DropdownContext);

    // The way of doing the toggle! (!false -> true)  (!true -> false) 
    const dropdownHandler = () => setDropdown(!isDropdownOpen);
    

    return (
        <CartIconContainerCss onClick={dropdownHandler}>
            <ShoppingIconCss/>
            <ItemCountCss>{cartItemsCount}</ItemCountCss>
        </CartIconContainerCss>
    )
}

export default CartIcon;
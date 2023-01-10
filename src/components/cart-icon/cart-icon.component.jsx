import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';

import { DropdownContext } from '../../contexts/dropdown.context';

import './cart-icon.style.scss';

const CartIcon = () => {
    const { isDropdownOpen , setDropdown , cartItemsCount } = useContext(DropdownContext);

    // The way of doing the toggle! (!false -> true)  (!true -> false) 
    const dropdownHandler = () => setDropdown(!isDropdownOpen);
    

    return (
        <div className='cart-icon-container' onClick={dropdownHandler}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartItemsCount}</span>
        </div>
    )
}

export default CartIcon;
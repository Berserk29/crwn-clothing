import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { useContext } from 'react';

import { DropdownContext } from '../../contexts/dropdown.context';

import './cart-icon.style.scss';

const CartIcon = () => {
    const { isDropdownOpen , setDropdown } = useContext(DropdownContext);

    const dropdownHandler = () => {
        if(!isDropdownOpen) return setDropdown(true);
        if(isDropdownOpen) return setDropdown(false);
    }

    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={dropdownHandler}/>
            <span className='item-count' onClick={dropdownHandler}>10</span>
        </div>
    )
}

export default CartIcon;
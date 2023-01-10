import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { DropdownContext } from '../../contexts/dropdown.context';

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.style.scss';

const CartDropdown = () => {
    const {cartItems, isDropdownOpen, setDropdown} = useContext(DropdownContext);
    const navigate = useNavigate();

    const goToCheckoutHandle = () => {
        navigate('/checkout')
        // Close the dropdown menu after clicking!
        setDropdown(!isDropdownOpen)  
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(el => <CartItem cartItem={el} key={el.id}/>)}
            </div>
            <Button onClick={goToCheckoutHandle}>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;
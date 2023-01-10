import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';

import CheckoutCard from "../../components/checkout-card/checkout-card.component";

import './checkout.style.scss';


const Checkout = () => {
    const {cartItems, cartTotalPrice} = useContext(DropdownContext)

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(el => <CheckoutCard cartItem={el} key={el.id}/>)}
            <span className='total'>TOTAL: ${cartTotalPrice}</span>
        </div>
    )
}

export default Checkout;
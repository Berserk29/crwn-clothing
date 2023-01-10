import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';

import './checkout-card.style.scss'

const CheckoutCard = ({cartItem}) => {
    const { imageUrl, name, quantity, price} = cartItem;
    const {addItemToCart, subtractItemToCart, removeItemToCart} = useContext(DropdownContext);

    const addProductToCart = () => addItemToCart(cartItem);
    const subtractProductToCart = () => subtractItemToCart(cartItem)
    const removeProductToCart = () => removeItemToCart(cartItem)


    return (
        <div className='checkout-card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>    
            <span className='quantity'>
                <div onClick={subtractProductToCart} className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={addProductToCart} className='arrow'>&#10095;</div>    
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={removeProductToCart}>&#10005;</div>
        </div>
    )
}

export default CheckoutCard;
import { useSelector, useDispatch  } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector.js';
import { 
    addItemToCart,
    subtractItemToCart,
    removeItemToCart,
} from '../../store/cart/cart.action.js';

import {
    CheckoutCardContainerCss,
    ImgContainerCss,
    NameCss,
    PriceCss,
    ValueCss,
    ArrowCss,
    RemoveButtonCss,
    QuantityCss
} from'./checkout-card.style.jsx'

const CheckoutCard = ({cartItem}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const { imageUrl, name, quantity, price} = cartItem;

    const addProductToCart = () => dispatch(addItemToCart(cartItems, cartItem));
    const subtractProductToCart = () => dispatch(subtractItemToCart(cartItems, cartItem))
    const removeProductToCart = () => dispatch(removeItemToCart(cartItems, cartItem))

    return (
        <CheckoutCardContainerCss>
            <ImgContainerCss>
                <img src={imageUrl} alt={`${name}`}/>
            </ImgContainerCss>
            <NameCss>{name}</NameCss>    
            <QuantityCss>
                <ArrowCss onClick={subtractProductToCart}>&#10094;</ArrowCss>
                <ValueCss>{quantity}</ValueCss>
                <ArrowCss onClick={addProductToCart}>&#10095;</ArrowCss>    
            </QuantityCss>
            <PriceCss>{price}</PriceCss>
            <RemoveButtonCss onClick={removeProductToCart}>&#10005;</RemoveButtonCss>
        </CheckoutCardContainerCss>
    )
}

export default CheckoutCard;
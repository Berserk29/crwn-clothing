import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context';

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
    const { imageUrl, name, quantity, price} = cartItem;
    const {addItemToCart, subtractItemToCart, removeItemToCart} = useContext(DropdownContext);

    const addProductToCart = () => addItemToCart(cartItem);
    const subtractProductToCart = () => subtractItemToCart(cartItem)
    const removeProductToCart = () => removeItemToCart(cartItem)


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
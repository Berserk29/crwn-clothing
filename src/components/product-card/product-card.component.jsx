import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';

import {BUTTON_TYPE_CLASSES} from '../button/button.component';

import {
    ProductCardContainerCss,
    FooterCss,
    NameCss,
    PriceCss,
    ButtonCss
} from './product-card.style.jsx';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const {name, price, imageUrl} = product;


    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainerCss>
            <img src={imageUrl} alt={`${name}`} />
            <FooterCss>
                <NameCss>{name}</NameCss>
                <PriceCss>{price}</PriceCss>
            </FooterCss>
            <ButtonCss buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</ButtonCss>
        </ProductCardContainerCss>
    )
}

export default ProductCard;
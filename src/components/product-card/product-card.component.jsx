import { useContext } from 'react';
import { DropdownContext } from '../../contexts/dropdown.context'; 

import {BUTTON_TYPE_CLASSES} from '../button/button.component';

import {
    ProductCardContainerCss,
    FooterCss,
    NameCss,
    PriceCss,
    ButtonCss
} from './product-card.style.jsx';

const ProductCard = ({ product }) => {
    const {name, price, imageUrl} = product;
    const { addItemToCart } = useContext(DropdownContext)

    const addProductToCart = () => addItemToCart(product);

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
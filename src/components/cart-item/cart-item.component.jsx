import {
    CartItemContainerCss,
    ItemDetailsCss,
    NameCss
} from './cart-item.style.jsx';

const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;

    return (
        <CartItemContainerCss>
            <img src={imageUrl} alt={name} />
            <ItemDetailsCss>
                <NameCss>{name}</NameCss>
                <span>{quantity} x ${price}</span>
            </ItemDetailsCss>
        </CartItemContainerCss>
    )
}

export default CartItem;
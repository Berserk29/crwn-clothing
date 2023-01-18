import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

import CheckoutCard from "../../components/checkout-card/checkout-card.component";

import {
    CheckoutContainerCss,
    CheckoutHeaderCss,
    HeaderBlockCss,
    HeaderBlockLastCss,
    TotalCss
} from './checkout.style.jsx';


const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotalPrice = useSelector(selectCartTotal);

    return (
        <CheckoutContainerCss>
            <CheckoutHeaderCss>
                <HeaderBlockCss>
                    <span>Product</span>
                </HeaderBlockCss>
                <HeaderBlockCss>
                    <span>Description</span>
                </HeaderBlockCss>
                <HeaderBlockCss>
                    <span>Quantity</span>
                </HeaderBlockCss>
                <HeaderBlockCss>
                    <span>Price</span>
                </HeaderBlockCss>
                <HeaderBlockLastCss>
                    <span>Remove</span>
                </HeaderBlockLastCss>
            </CheckoutHeaderCss>
            {cartItems.map(el => <CheckoutCard cartItem={el} key={el.id}/>)}
            <TotalCss className='total'>TOTAL: ${cartTotalPrice}</TotalCss>
        </CheckoutContainerCss>
    )
}

export default Checkout;
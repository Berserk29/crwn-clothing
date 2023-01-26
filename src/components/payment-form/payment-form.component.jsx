import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import { selectCartTotal} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { setCartEmptyAction } from '../../store/cart/cart.action';

import {BUTTON_TYPE_CLASSES} from '../button/button.component'

import { PaymentFormContainer, FormContainer, PaymentButton} from './payment-form.style'

const PaymentForm = () => {
    const dispatch = useDispatch();
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const emptyCartHandler = () => {
        dispatch(setCartEmptyAction())
    }

    const paymentHandler = async (e) => {
        e.preventDefault();
        try{
            if(!stripe || !elements) return;

            setIsProcessingPayment(true)
    
            const response = await fetch('/.netlify/functions/create-payment-intent', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount: amount * 100})
            }).then(res => res.json());
    
            const {paymentIntent: {client_secret}} = response;
    
            const paymentResult = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser ? currentUser.displayName : 'Guest',
                    }
                }
            });
    
            setIsProcessingPayment(false)
    
            if(paymentResult.error) {
                alert(paymentResult.error)
            } else {
                if(paymentResult.paymentIntent.status === 'succeeded') {
                    alert('Payment Successful');
                    emptyCartHandler()
                }
            }

        }catch(error){
            console.log(error)
        }

    }
    
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement/>
                <PaymentButton 
                    isLoading={isProcessingPayment}
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                > Pay now </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;
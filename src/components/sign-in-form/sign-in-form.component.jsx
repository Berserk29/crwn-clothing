import { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
    SignInContainerCss,
    TitleCss,
    ButtonContainerCss
} from './sign-in-form.style.jsx';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.reducer';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const dispatch = useDispatch();
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }

    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            dispatch(emailSignInStart({email, password}))
            resetFormFields();    
        } catch(err){
            switch(err.code) {
                case 'auth/wrong-password' :
                    alert('Incorrect password or email');
                    break;
                case 'auth/user-not-found' :
                    alert('No user associated with this email');
                    break;
                default :
                    console.error(err);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <SignInContainerCss>
            <TitleCss>Already have an account</TitleCss>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Email'
                    type="email"
                    required onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    label='Password'
                    type="password" 
                    required onChange={handleChange}
                    name="password"
                    value={password}
                />
                <ButtonContainerCss>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonContainerCss>
            </form>
        </SignInContainerCss>
    )
}

export default SignInForm;
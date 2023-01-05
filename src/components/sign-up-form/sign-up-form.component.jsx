import { useState } from 'react'
import { createAuthUserWithEmailAndPassword , createUserDocumentFromAuth } from '../../utiles/firebase/firebase.utiles';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-up-form.style.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert('password do not match');
            return ;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email,
                password,
            );

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
            
        }catch(err){
            if(err.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            else{
                console.log('user creation encountered an error', err)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    type='type'
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
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
                <FormInput
                    label='Confirm Password'
                    type="password"
                    required onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button children='Sign In' type='submit' />
            </form>
        </div>
    )
}

export default SignUpForm;
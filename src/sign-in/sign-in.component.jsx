import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from '../utiles/firebase/firebase.utiles';

import SignUpForm from '../components/sign-up-form/sign-up-form.component';
import Button from '../components/button/button.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return (
        <div>
            <h1>Sign In Page</h1>
            <Button 
                children='Sign up with Google'
                buttonType='google'
                onClick={logGoogleUser} 
                />
            <SignUpForm/>
        </div>
    );
};

export default SignIn;
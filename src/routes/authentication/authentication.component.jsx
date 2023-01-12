import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainerCss } from './authentication.style.jsx';

const Authentication = () => {
    return (
        <AuthenticationContainerCss>
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainerCss>
    );
};

export default Authentication;
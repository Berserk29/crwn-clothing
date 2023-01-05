import './button.style.scss';

// 3 type button --> default , google, inverted
const BUTTON_TYPE_CLASSES = {
    default: '',
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({children, buttonType = 'default', ...otherProps}) => {

    return (
            <button 
                className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
                {...otherProps}
            >
                {children}
            </button>
    )
}

export default Button;
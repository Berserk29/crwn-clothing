import {
    GroupCss,
    InputCss,
    FormInputLabelCss,

} from './form-input.style.jsx'

const FormInput = ({label, ...otherProps }) => {
    return (
       <GroupCss>
           <InputCss {...otherProps} />
            {label && (
             <FormInputLabelCss shrink={otherProps.value.length}>{label}</FormInputLabelCss>
            )} 
        </GroupCss> 
    );
};

export default FormInput;
import React, {ReactElement, useState} from "react";
import { InputWrapper, Wrapper } from "./style";
type CustomInputProps = {
    type: 'password' | 'email' | 'text',
    name?: string,
    placeholder: 'Your email' | 'Your password' | 'Your name' | 'Confirm password' | 'Add your text',
    value?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label: 'Email' | 'Password' | 'Name' | 'Confirm password' | 'Title' | 'lesson_num' | 'Publish at' | 'Image' | 'Description' | 'Text',
    error?: boolean,
}
export const CustomInput = (props: CustomInputProps): ReactElement => {
//    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

//    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
//      if (event.target.value.length < 6){
//          setError(true)
//      } else {
//          setValue(event.target.value);
//          setError(false);
//      }
//        setValue(event.target.value);
//    };
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
       props.onChange(e);
    }
    const validateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 6) {
            setError(true);
        } else {
            setError(false)
        }
    }
    return (
        <InputWrapper error={error}>
            <Wrapper><label>{props.label}</label></Wrapper>
            <input name={props.name} type={props.type} value={props.value} onChange={handleInput} onBlur={validateValue} placeholder={props.placeholder} />
            {error && <span>Error text</span>}
        </InputWrapper>
    )
}
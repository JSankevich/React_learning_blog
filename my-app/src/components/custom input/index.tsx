import React, {ReactElement, useState} from "react";
import { InputWrapper, Wrapper } from "./style";
type CustomInputProps = {
    type?: 'password' | 'email' | 'text',
    name?: string,
    placeholder?: 'Your email' | 'Your password' | 'Your name' | 'Confirm password',
    value?: string,
    //как типизировать onChange? если ставить ()=>void ругается чт м.б. underfined
    onChange?: any,
    label?: 'Email' | 'Password' | 'Name' | 'Confirm password',
    error?: boolean,
}
export const CustomInput = ({type,placeholder,label}:CustomInputProps): ReactElement => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.length < 6){
          setError(true)
      } else {
          setValue(event.target.value);
          setError(false);
      }
        setValue(event.target.value);
    };

    const validateValue = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (value.length < 6) {
            setError(true);
        } else {
            setError(false)
        }
    }
    return (
        <InputWrapper error={error}>
            <Wrapper><label>{label}</label></Wrapper>
            <input type ={type} value={value} onChange={handleChange} onBlur={validateValue} placeholder={placeholder} />
            {error && <span>Error text</span>}
        </InputWrapper>
    )
}
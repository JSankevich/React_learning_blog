import React, {ReactElement, useState} from "react";
import { InputWrapper } from "./style";
type CustomInputProps = {
    type: 'password' | 'email' | 'text',
    name: string,
    placeholder:'Введите текст',
    value: string,
    onChange: () => void,
}
export const CustomInput = ({type}:CustomInputProps): ReactElement => {
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
        <input type ={type} value={value} onChange={handleChange} onBlur={validateValue} />
            {error && <span>Error text</span>}
        </InputWrapper>
    )
}
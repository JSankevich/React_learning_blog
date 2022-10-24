import React, {FormEventHandler, useState} from "react";
import {CustomInput} from "../../components/custom input";
import {Button} from "../../components/button";

//export const SignInForm = () => {
//    const [value, setValue] = useState({
//        password: '',
//        email: '',
//    })
//    const handleSubmit = () => {
//        e.preventDefault();
//        console.log (value);
//    }
//    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//        setValue( (prevState))
//    }
//    return (
//        <form onSubmit={handleSubmit}>
//            <CustomInput
//                type='password'
//                onChange={handleChange}
//                placeholder='Введите текст'
//                value={value.password}
//                name={'email'}
//            />
//            <CustomInput type='email'/>
//            <Button>Submit</Button>
//        </form>
//    )
//}
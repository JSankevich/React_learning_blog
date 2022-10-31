import React, {FormEventHandler, useState} from "react";
import {CustomInput} from "../../components/custom input";
import { Container } from "./style";
import {Button} from "../../components/button";


export const SignInForm = () => {
    const [value, setValue] = useState({
        password: '',
        email: '',
    })

    return (
        <>
        <Container>
            <CustomInput type='email' placeholder='Your email' label='Email' />
            <CustomInput type='password' placeholder='Your password' label='Password' />
            <p>Forgot password?</p>
            <Button text='Sign In'/>
        </Container>
        </>
    )
}
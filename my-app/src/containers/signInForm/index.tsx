import React, {FormEventHandler, ReactElement, useState} from "react";
import {CustomInput} from "../../components/custom input";
import { Container, SignUpNext, ForgotPassword, BackHome } from "./style";
import {Button} from "../../components/button";
import {Title} from "../../components/Title";
import {NavLink} from "react-router-dom";


export const SignInForm = (): ReactElement => {
    const [value, setValue] = useState({
        password: '',
        email: '',
    })

    return (
        <>
            <NavLink to="/"><BackHome>Back to home</BackHome></NavLink>
        <Title text={'Sign In'} />
        <Container>
            <CustomInput type='email' placeholder='Your email' label='Email' />
            <CustomInput type='password' placeholder='Your password' label='Password' />
            <ForgotPassword>Forgot password?</ForgotPassword>
            <Button text='Sign In'/>
            <SignUpNext>
                <p>Don’t have an account? <span>Sign Up</span></p>
            </SignUpNext>
        </Container>
        </>
    )
}
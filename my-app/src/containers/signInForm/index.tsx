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
        <BackHome><NavLink to="/">Back to home</NavLink></BackHome>
        <Title text={'Sign In'} />
        <Container>
            <CustomInput type='email' placeholder='Your email' label='Email' />
            <CustomInput type='password' placeholder='Your password' label='Password' />
            <ForgotPassword>Forgot password?</ForgotPassword>
            <Button text='Sign In' onClick={() => { console.log("button clicked");}} />
            <SignUpNext>
                <p>Don’t have an account? <NavLink to="/SignUp"><span>Sign Up</span></NavLink></p>
            </SignUpNext>
        </Container>
        </>
    )
}

//фунция по сабмиту как в signup dispatch (signInRequest (valuйe))
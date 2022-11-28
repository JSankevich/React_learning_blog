import React, {FormEventHandler, ReactElement, useState} from "react";
import {CustomInput} from "../../components/custom input";
import { Container, SignUpNext, ForgotPassword, BackHome } from "./style";
import {Button} from "../../components/button";
import {Title} from "../../components/Title";
import {NavLink} from "react-router-dom";
import {ButtonWrapper} from "../SignUpForm/style";
import {useDispatch} from "react-redux";
import {signInRequest, signUpRequest} from "../../redux/authReducer/action";
import {validateEmail, validatePassword} from "../../validate";

type Values = {
    email : string,
    password : string,
}

export const SignInForm = (): ReactElement => {
    let [value, setValue] = useState<Values>({
        password: '',
        email: '',
    })

    const [errors, setErrors] = useState({
        password: '',
        email: '',
    });
    console.log(errors)

    const handleErrors = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const errors = {
            email: validateEmail(value.email),
            password: validatePassword(value.password),
        };
        setErrors(errors);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((prevValue: Values) => {
            return (
                {
                    ...prevValue,
                    [e.target.name]: e.target.value,
                }
            )
        })
    }

    const dispatch = useDispatch();
    const SentSignIn = () => {
        dispatch(signInRequest(value));
    }

    return (
        <>
        <BackHome><NavLink to="/">Back to home</NavLink></BackHome>
        <Title text={'Sign In'} />
        <Container>
            <CustomInput
            label={'Email'}
            type={'email'}
            name={'email'}
            placeholder={'Your email'}
            value={value.email}
            onChange={handleChange}
            error
            />
            <CustomInput
            label={'Password'}
            type={'password'}
            name={'password'}
            placeholder={'Your password'}
            value={value.password}
            onChange={handleChange}
            error />
            <ForgotPassword>Forgot password?</ForgotPassword>
            <ButtonWrapper>
                <button onClick={SentSignIn}>Sign In</button>
            </ButtonWrapper>
            <SignUpNext>
                <p>Don’t have an account? <NavLink to="/SignUp"><span>Sign Up</span></NavLink></p>
            </SignUpNext>
        </Container>
        </>
    )
}

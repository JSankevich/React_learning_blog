import React, {ReactElement, useState} from "react";
import {CustomInput} from "../../components/custom input";
import {Button} from "../../components/button";
import {Title} from "../../components/Title";
import {NavLink} from "react-router-dom";
import {ContainerSignUp, HaveAccount, Home} from "./style";

type Values = {
    name: string,
    email : string,
    password : string,
    passwordConfirm: string,
}

export const SignUpForm = (): ReactElement => {
    const [value, setValue] = useState<Values>({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.dir(e.target);
        setValue((prevState: Values) => {
            return (
                {
                    ...prevState,
                    [e.target.name]: e.target.value,
                }
            )
        })
    }
        return (
        <>
            <Home><NavLink to="/">Back to home</NavLink></Home>
            <Title text={'Sign Up'} />
            <ContainerSignUp>
                <CustomInput
                    type='text'
                    placeholder='Your name'
                    label='Name'
                    name='name'
                    value={value.name }
                    onChange={handleChange}
                />
                <CustomInput
                    type='email'
                    placeholder='Your email'
                    label='Email'
                    name='email'
                    value={value.email }
                    onChange={handleChange}
                />
                <CustomInput
                    type='password'
                    placeholder='Your password'
                    label='Password'
                    name='password'
                    value={value.password }
                    onChange={handleChange}
                />
                <CustomInput
                    type='password'
                    placeholder='Confirm password'
                    label='Confirm password'
                    name='passwordConfirm'
                    value={value.passwordConfirm }
                    onChange={handleChange}
                />
                <Button text='Sign Up' />
                <HaveAccount>Already have an account? <NavLink to="/SignIn"><span>Sign In</span></NavLink></HaveAccount>
            </ContainerSignUp>
        </>
    )
}
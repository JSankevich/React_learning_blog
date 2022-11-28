import React, {ReactElement, useState} from "react";
import {CustomInput} from "../../components/custom input";
import {Title} from "../../components/Title";
import {NavLink} from "react-router-dom";
import {ButtonWrapper, ContainerSignUp, HaveAccount, Home} from "./style";
import {useDispatch} from "react-redux";
import {signUpRequest} from "../../redux/authReducer/action";

type Values = {
    username: string,
    email : string,
    password : string,
//    passwordConfirm: string,
}

export const SignUpForm = (): ReactElement => {
    const [value, setValue] = useState<Values>({
        username: '',
        email: '',
        password: '',
//        passwordConfirm: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//        e.preventDefault();

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
    const SentForm = () => {
        dispatch(signUpRequest(value))
        console.log(value)
    }

        return (
        <>
            <Home><NavLink to="/">Back to home</NavLink></Home>
            <Title text={'Sign Up'} />
            <ContainerSignUp>

                <CustomInput
                    type={'text'}
                    placeholder={'Your name'}
                    label={'Name'}
                    name={'username'}
                    value={value.username}
                    error
                    onChange={handleChange}
                />
                <CustomInput
                    type={'email'}
                    placeholder={'Your email'}
                    label={'Email'}
                    name={'email'}
                    value={value.email}
                    error
                    onChange={handleChange}
                />
                <CustomInput
                    type={'password'}
                    placeholder={'Your password'}
                    label={'Password'}
                    name={'password'}
                    value={value.password}
                    error
                    onChange={handleChange}
                />
                    {/*//<CustomInput
                    type={'password'}
                    placeholder={'Confirm password'}
                    label={'Confirm password'}
                    name={'passwordConfirm'}
                    value={value.passwordConfirm}
                    onChange={handleChange}
                />//*/}
                <ButtonWrapper>
                    <button onClick={SentForm}>Sign Up</button>
                </ButtonWrapper>
                <HaveAccount>Already have an account? <NavLink to="/SignIn"><span>Sign In</span></NavLink></HaveAccount>
            </ContainerSignUp>
        </>
    )

}


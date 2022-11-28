import React from "react";
import {Button} from "../../components/button";
import {Title} from "../../components/Title";
import {BackHome} from "../signInForm/style";
import {ContainerSuccess, ContainerEmailConfirmed} from "./style";
import {ButtonWrapper, Home} from "../SignUpForm/style";
import {NavLink} from "react-router-dom";


export const Success = () => {
    return (
        <>
            <BackHome><NavLink to="/">Back to home</NavLink></BackHome>
            <Title text={'Success'} />
            <ContainerSuccess>
                <ContainerEmailConfirmed>
                <p>Email confirmed.</p>
                <p>Your registration is now completed</p>
                </ContainerEmailConfirmed>
                <ButtonWrapper>
                    <NavLink to="/">
                    <button>Go to home</button>
                    </NavLink>
                </ButtonWrapper>
            </ContainerSuccess>
        </>
    )
}
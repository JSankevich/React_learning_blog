import React from "react";
import {Button} from "../../components/button";
import {Title} from "../../components/Title";
import {BackHome} from "../signInForm/style";
import {ContainerSuccess, ContainerEmailConfirmed} from "./style";


export const Success = () => {
    return (
        <>
            <BackHome>Back to home</BackHome>
            <Title text={'Success'} />
            <ContainerSuccess>
                <ContainerEmailConfirmed>
                <p>Email confirmed.</p>
                <p>Your registration is now completed</p>
                </ContainerEmailConfirmed>
                <Button text='Go to home' onClick={() => console.log('click')} />
            </ContainerSuccess>
        </>
    )
}
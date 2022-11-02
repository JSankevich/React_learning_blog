import React, {ReactElement} from "react";
import { ButtonWrapper } from './style';

export type ButtonProps = {
    text: string,
}

export const Button = ({text}:ButtonProps): ReactElement => {
    return (
        <ButtonWrapper>
        <button>{text}</button>
        </ButtonWrapper>
    )
};
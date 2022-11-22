import React, {ReactElement, ReactNode} from "react";
import { ButtonWrapper } from './style';

export type ButtonProps = {
    text: string,
    onClick: () => void;
}

export const Button = ({text}:ButtonProps, {onClick}: ButtonProps): ReactElement => {
    return (
        <ButtonWrapper>
        <button onClick={onClick}>{text}</button>
        </ButtonWrapper>
    )
};
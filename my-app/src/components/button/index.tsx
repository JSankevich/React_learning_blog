import React, {ReactElement} from "react";
import {ButtonStyle} from "./style";

export type ButtonType = {
    type: 'default' | 'disabled',
}

export const Button = (props:ButtonType): ReactElement => {
    return (
        <ButtonStyle>
        <button>Primary</button>
        </ButtonStyle>
    )
};
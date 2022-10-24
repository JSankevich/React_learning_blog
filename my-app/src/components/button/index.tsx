import React, {ReactElement} from "react";
import {ButtonStyle} from "./style";

export type ButtonType = {
    type: 'Primary' | 'secondary',
}

export const Button = (props:ButtonType): ReactElement => {
    return (
        <ButtonStyle>
        <button>1</button>
        </ButtonStyle>
    )
};
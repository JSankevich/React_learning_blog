import React, {ReactElement} from "react";
import {TitleStyle} from "./style";

type h1Type = {
   text: string,
}

export const Title = (props: h1Type): ReactElement => {
    return (
        <TitleStyle>
        <h1>{props.text}</h1>
        </TitleStyle>

    )
}
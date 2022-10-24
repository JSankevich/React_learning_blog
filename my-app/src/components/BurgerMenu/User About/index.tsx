import React, {ReactElement} from "react";
import {UserStyle} from "./style";

type indexType = {
    username: string,
}

export const Index = (props: indexType): ReactElement => {
    return  (
        <UserStyle>
            <div>{props.username.split(' ')[0].charAt(0).toUpperCase()+props.username.split(' ')[1].charAt(0).toUpperCase()}</div>
            <p>{props.username}</p>
        </UserStyle>
    )
}
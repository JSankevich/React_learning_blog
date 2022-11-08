import React, {ReactElement} from "react";
import {UserStyle, UserInfo, IconUserWrapper, UserNameWrapper} from "./style";
import {NavLink} from "react-router-dom";

type indexType = {
    username: string,
    signIn?: () => void;
}

export const Index = (props: indexType): ReactElement => {
    return  (
        <NavLink to="/SignIn">
        <UserStyle>
            <UserInfo>
                <IconUserWrapper>
                    <p>{props.username.split(' ')[0].charAt(0).toUpperCase()+props.username.split(' ')[1].charAt(0).toUpperCase()}</p>
                </IconUserWrapper>
                <UserNameWrapper>{props.username}</UserNameWrapper>
            </UserInfo>
        </UserStyle>
        </NavLink>
    )
}
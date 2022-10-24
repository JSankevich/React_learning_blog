import * as React from "react";
import {ReactNode} from "react";
import {Burger} from "../../components/BurgerMenu";
import {BackgroundWrapper} from "./style";
type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Burger />
            <BackgroundWrapper>
            {children}
            </BackgroundWrapper>
        </>
    )
}
import * as React from "react";
import {ReactNode} from "react";
import {Burger} from "../../components/BurgerMenu";
import {BackgroundWrapper, PageContainer} from "./style";
import {Footer} from "../../components/footer";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <Burger />
            <BackgroundWrapper>
                <PageContainer>
                    {children}
                </PageContainer>
            </BackgroundWrapper>
            <Footer />
        </>
    )
}
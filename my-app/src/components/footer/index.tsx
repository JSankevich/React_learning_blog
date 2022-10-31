import React, {ReactElement} from "react";
import { FooterWrapper, FooterContent } from "./style";

export const Footer = (): ReactElement => {
    return (
        <FooterWrapper>
            <FooterContent>
            <p>©2022 Blogfolio</p>
            <p>All rights reserved</p>
            </FooterContent>
        </FooterWrapper>
    )

}
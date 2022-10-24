import React, {ReactElement, useState} from "react";
import {BurgerWrapper, MenuWrapper, NavWrapper, SearchInput, SearchWrapper} from "./style";
import { Index } from "./User About";
import search from "./images/search.svg";

export const Burger = (): ReactElement => {
    const [menuActive, setMenuActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState('close');

//Как проитпизировать события?
    const activeMenu = (event: any) => {
        if (menuActive && menuOpen) {
            setMenuActive(false);
            setMenuOpen('close');
        } else {
            setMenuActive(true);
            setMenuOpen('open');
        }
    }

    return  (
        <NavWrapper>
            <BurgerWrapper>
                <div onClick={activeMenu}>
                    <span className={menuOpen}></span>
                    <span className={menuOpen}></span>
                    <span className={menuOpen}></span>
                </div>
            </BurgerWrapper>
            <SearchInput></SearchInput>
            <SearchWrapper>
                <img src={search} alt="search" />
            </SearchWrapper>
            <Index username={'Yulia Sankevich'} />
            {menuActive && <MenuWrapper>
                <li><Index username={'Yulia Sankevich'} /></li>
            </MenuWrapper>}
        </NavWrapper>
    )
};
import React, {ReactElement, useContext, useEffect, useState} from "react";
import {BurgerWrapper, NavWrapper, BurgerIcon, RightPanel, SearchWrapper, SearchInput, MenuWrapper} from "./style";
import { Index } from "./User About";
import search from "./images/search.svg";
import {Switcher} from "../switcher";
import {ThemeContext} from "../ThemeProvider";

export const Burger = (): ReactElement => {
    const theme = useContext(ThemeContext);
    console.log (theme);
    const [menuActive, setMenuActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState('close');

    const activeMenu = () => {
        if (menuActive && menuOpen) {
            setMenuActive(false);
            setMenuOpen('close');
        } else {
            setMenuActive(true);
            setMenuOpen('open');
        }
    }

    return  (
        <>
        <NavWrapper>
            <BurgerWrapper onClick={activeMenu}>
                <BurgerIcon>
                    <span className={menuOpen}></span>
                    <span className={menuOpen}></span>
                    <span className={menuOpen}></span>
                </BurgerIcon>
            </BurgerWrapper>
            <SearchInput>
                <input placeholder={'Введите текст для начала поиска ...'}/>
            </SearchInput>
            <RightPanel>
                <SearchWrapper>
                    <img src={search} alt="search" />
                </SearchWrapper>
                <Index username={'Yulia Sankevich'} />
            </RightPanel>
        </NavWrapper>
        {menuActive && <MenuWrapper>
            <li><Index username={'Yulia Sankevich'} /></li>
         </MenuWrapper>}
        </>
    )
};




//

//<Switcher/>



import React, {ReactElement, useContext, useEffect, useState} from "react";
import {BurgerWrapper, NavWrapper, BurgerIcon, RightPanel, SearchWrapper, SearchInput, MenuWrapper, LogInWrapper,
    ButtonMenu} from "./style";
import { Index } from "./User About";
import search from "./images/search.svg";
import login from "./images/login.png";
import {Switcher} from "../switcher";
import {ThemeContext} from "../ThemeProvider";
import {NavLink} from "react-router-dom";

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
                <input placeholder={'Search...'}/>
            </SearchInput>
            <RightPanel>
                <SearchWrapper>
                    <img src={search} alt="search" />
                </SearchWrapper>
                <NavLink to='/SignIn'>
                <LogInWrapper>
                    <img src={login} alt="login" />
                </LogInWrapper>
                </NavLink>
            </RightPanel>
        </NavWrapper>
        {menuActive && <MenuWrapper>
            <li><Index username={'Yulia Sankevich'} /></li>
            <li><ButtonMenu><NavLink to='/'>Home</NavLink></ButtonMenu></li>
            <li><ButtonMenu>Add post</ButtonMenu></li>
         </MenuWrapper>}
        </>
    )
};

//<Index username={'Yulia Sankevich'} />
//<Switcher/>



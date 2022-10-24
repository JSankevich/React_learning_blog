import styled from "styled-components";

export const BurgerWrapper = styled.div `
 
  div {
    width: 52px;
    height: 51px;
    border: 1px solid #5360CD;
    background-color: #2231AA;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding-left: 32px;
    padding-top: 30px;
  }
  
  span {
    width: 20px;
    height: 2px;
    background-color: #FFFFFF;
    margin-top: 4px;
    transition: all ease 0.5s;
  }
  
  .open:nth-child(1) {
    transform: rotate(45deg) translateY(8.5px);
    margin-left: 5px;
  }

  .open:nth-child(2) {
    opacity: 0;
  }

  .open:nth-child(3) {
    transform: rotate(-45deg) translateY(-8.3px);
    margin-left: 5px;
  }

  .close:nth-child(1) {
    transform: rotate(0) translateY(0);
    margin-left: 0px;
  }

  .close:nth-child(2) {
    opacity: 1;
  }

  .close:nth-child(3) {
    transform: rotate(0) translateY(0);
    margin-left: 0px;
  }
`;

export const NavWrapper = styled.nav `
    width: 100%;
    height: 84px;
    position: fixed;
    background-color: #2231AA;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`;

export const MenuWrapper = styled.ul `
    position: fixed;
    height: 100%;
    width: 234px;
    background-color: #FFFFFF;
    top: 75px;
    transition: all 0.2s;

    

  li {
    list-style-type: none;
    margin-left: -40px;
  }

`;

export const SearchWrapper = styled.div `
  width: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5360CD;
  cursor: pointer;
`;

export const SearchInput = styled.div `
  width: 80%;
  border: 1px solid #5360CD;
`;
import styled from "styled-components";

export const NavWrapper = styled.nav `
    width: 100%;
    height: 84px;
    background-color: #2231AA;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #5360CD;
`;

export const BurgerWrapper = styled.div `
    width: 84px;
    height: 83px;
    border: 1px solid #5360CD;
    background-color: #2231AA;
    cursor: pointer;
  `;

export const BurgerIcon = styled.div `
  width: 20px;
  height: 22px;
  margin-left: 32px;
  margin-top: 34px;
  
span {
    height: 2px;
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
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

export const RightPanel = styled.div `
  width: 314px;
  height: 99%;
  display: flex;
  flex-direction: row;
`;

export const SearchWrapper = styled.div `
  width: 84px;
  height: 99%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #5360CD;
  cursor: pointer;
  
img {
  width: 24px;
  height: 24px;
}
`;

export const SearchInput = styled.div `
  width: 80%;
  height: 99%;
  cursor: pointer;
  
  input {
    height: 99%;
    width: 99.7%;
    background-color: #2231AA;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 34px;
    outline: 0;
    box-shadow: none;
    border: none;
    
    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: white;
      opacity: 0.5;
    }
  }
`;

export const MenuWrapper = styled.ul `
    position: fixed;
    height: 100%;
    width: 234px;
    top: 78px;
    transition: all 0.2s;

    li {
      list-style-type: none;
      margin-left: -40px;
    }
`;




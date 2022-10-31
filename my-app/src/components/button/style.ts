import styled from "styled-components";

export const ButtonWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
  
  button {
    padding: 16px 32px;
    width: 544px;
    height: 56px;
    background: #2231AA;
    border-radius: 2px;
    border: none;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    cursor: pointer;
    
    &:hover {
      background-color: #5360CD;
      transition: ease-in-out 1s;
    }
  }
`;
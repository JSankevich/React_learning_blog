import styled from "styled-components";

export const ContainerSignUp = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 624px;
    height: 684px;
    border: 1px solid #DADADA;
    margin: 72px auto;
`;

export const HaveAccount = styled.p `
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #8D8E97;
    margin-top: 24px;
    
  
    a {
      text-decoration: none;
    }
  
    span {
      color: rgba(34, 49, 170, 1);
    }
`;

export const Home = styled.p `
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #313037;
    margin-bottom: 32px;
    margin-top: 72px;
  
    a {
      text-decoration: none;
    }
`;

export const ButtonWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
  
  a {
    text-decoration: none;
  }
  
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

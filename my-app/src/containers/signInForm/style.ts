import styled from "styled-components";

export const Container = styled.div `
    width: 624px;
    height: 472px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    flex-direction: column;
    border: 1px solid #DADADA;
    margin: 72px auto;
`;

export const ForgotPassword = styled.p `
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #313037;
    margin-top: 16px;
    margin-left: -390px;
    margin-bottom: 0px;
`;

export const SignUpNext = styled.div `
    margin-top: 24px;
    width: 243px;
    height: 20px;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #8D8E97;
  
    p {
      margin-top: 0;
    }
  
    span {
        color: rgba(34, 49, 170, 1);
        cursor: pointer;
    }
`;

export const BackHome = styled.p `
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #313037;
    margin-bottom: 32px;
    margin-top: 72px;
`;

import styled from 'styled-components';

export const FooterWrapper = styled.div `
    height: 93px;
    width: 100%;
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #DADADA;

`;

export const FooterContent = styled.div `
    width: 1120px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
    p {
      width: 138px;
      height: 24px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #8D8E97;
    }
`;
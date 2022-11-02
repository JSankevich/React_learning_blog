import styled from 'styled-components';

export const InputWrapper = styled.div<{error:boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  input {
    width: 524px;
    height: 56px;
    border: 1px solid ${(props) => props.error ? 'red' : '#E5E5E5'};
    margin-top: 8px;
    background-color: #FFFFFF;
    border-radius: 2px;
    padding-left: 20px;
    color: #8D8E97;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    outline: 0;
    outline-offset: 0;
    
    
    &::placeholder{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #8D8E97;
    }
  }
  
  span {
    color: red;
  }
`;

export const Wrapper = styled.div `
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #313037;
    margin-top: 40px;
`;

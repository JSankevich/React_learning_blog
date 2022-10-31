import styled from "styled-components";

export const UserStyle = styled.div `
  width: 230px;
  height: 99%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #2231AA;
  border: 1px solid #5360CD;
  cursor: pointer;
`;

export const UserInfo = styled.div `
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
`;

export const IconUserWrapper = styled.div `
    width: 48px;
    height: 48px;
    background-color: #5360CD;
    border-radius: 2px;
   display: flex;
    justify-content: center;
    align-items: center;
  
    p {
      color: white;
      font-size: 16px;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 600;
      line-height: 34px;
    }
`;

export const UserNameWrapper = styled.p `
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 34px;
    color: white;
    margin-left: 16px;
`;



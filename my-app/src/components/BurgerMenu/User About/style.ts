import styled from "styled-components";

export const UserStyle = styled.div `
  padding: 17px 34px;
  width: 252px;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #2231AA;
  border: 1px solid #5360CD;
  cursor: pointer;

  div {
    color: white;
    background-color: #5360CD;
    font-size: 16px;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    border-radius: 2px;
    font-weight: 600;
    line-height: 34px;
  }
  
  p {
    margin-left: 16px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 34px;
    display: flex;
    align-items: center;
  }
`;

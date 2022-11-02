import styled from 'styled-components';

export const TabsLine = styled.div `
    width: 100%;
    height: 48px;
    border-bottom: 1px solid #DADADA;
    display: flex;
    flex-direction: row;
    margin-top: 47px;
`;

export const Tab = styled.div `
    width: 176px;
    height: 48px;
    display: flex;
    justify-content: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #313037;
    cursor: pointer;
  
    &:hover{
      color: #2231AA;
    }
  
    &.active {
      border-bottom: 2px solid #313037;
    }
`;

export const TabsContent = styled.div `
    margin-top: 63px;
    width: 100%;
    height: 100%;
`;

export const ContentFor1Tab = styled.div `
    display: none;
  
    &.active-content {
      display: block;
  }
`;

export const ContentFor2Tab = styled.div `
    display: none;

    &.active-content {
      display: block;
    }
`;

export const ContentFor3Tab = styled.div `
    display: none;

  &.active-content {
    display: block;
  }
`;
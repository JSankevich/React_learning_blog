import styled from 'styled-components';

export const ButtonStyle = styled.div `
  width: 132px;
  height: 56px;
  background-color: #2231AA;
  
  button {
  padding: 15px;
  justify-content: center;
  display: flex;
  align-items: center;
  background-color: #2231AA;
  margin-top: 10px;
  color: white;
  border: none;
  border-radius: 2px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  width: 132px;
  height: 56px;
  }
  
  &:hover {
    opacity: 0.9;
    background-color: #5360CD;
    transition: 1s ease-in-out;
  }
`;



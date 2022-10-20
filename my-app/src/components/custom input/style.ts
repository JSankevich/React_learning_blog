import styled from 'styled-components';

export const InputWrapper = styled.div<{error:boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  input {
    width: 200px;
    border: 1px solid ${(props) => props.error ? 'red' : 'grey'};
    margin: 10px;
  }
  
  span {
    color: red;
  }
`;
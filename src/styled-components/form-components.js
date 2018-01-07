import styled from 'styled-components'

export const ButtonsToolbar = styled.div`
  text-align: center;

  > button:not(:last-of-type) {
    margin-right: 15px;
  }
  
  > button:nth-child(3) {
    margin-top: 20px;
  }
  
  > button:disabled {
    cursor: not-allowed;
  }
  
   > div:not(:last-child) {
    margin-right: 15px;
  }

  @media (min-width: 400px) {
  > button:nth-child(3) {
        margin-top: 0;
    }
  }
`;

export const ActionMessage = styled.h5`
  text-align: center;
  letter-spacing: 1.2px;
  color: ${props => (props.error && 'red') || (props.submitSucceeded && 'green')};
`;

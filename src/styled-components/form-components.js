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

  @media (min-width: 400px) {
  > button:nth-child(3) {
        margin-top: 0;
    }
  }
`;

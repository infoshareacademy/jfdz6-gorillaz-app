import styled from 'styled-components'

export const Spinner = styled.div`
  width: ${props => props.size || '125px'};
  height: ${props => props.size || '125px'};
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #2196f3;
  animation: spin 2s linear infinite;
  
  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;


export const Wrapper = styled.div`
  max-width: ${props => props.maxWidth || '360px'};
  margin: 0 auto;
  padding: 10px;
`;

import styled from 'styled-components'

export const NoDataContainer = styled.div`
  background-color: ${props => props.bgc || 'rgba(158, 158, 158, 0.8)'};
  padding: ${props => props.padding || '1em'};
  border-radius:  ${props => props.radius || '0.5em'};
}
`;

export const NoDataInfo = styled.h5`
  color: ${props => props.color || 'white'};
  text-align: center;
  letter-spacing: 1px;
}
`;
import styled from 'styled-components'

export const NoDataContainer = styled.div`
  background-color: ${props => props.bgc || 'rgba(158, 158, 158, 0.8)'};
  padding: ${props => props.padding || '1em'};
  border-radius:  ${props => props.radius || '0.5em'};
`;

export const NoDataInfo = styled.h5`
  color: ${props => props.color || 'white'};
  text-align: center;
  letter-spacing: 1px;
  font-family:'Khand', sans-serif;
`;

export const Header = styled.h3`
   margin-bottom: 30px;
   text-align: center;
   color: rgb(3, 120, 244);
   text-transform: uppercase;
   font-weight: bold;
   letter-spacing: 2px;
   font-family:'Khand', sans-serif;

   
   > span {
    color: rgb(255, 167, 7);
    padding-right: 5px;
   }
`;

import styled, {css} from 'styled-components'

export const MyButton = styled.button`
  background-color: ${props => props.bgc ? props.bgc : 'grey'};
  color: ${props => props.color ? props.color : 'white'};
  font-size: ${props => props.size ? props.size : '1em'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  letter-spacing: ${props => props.spacing ? props.spacing : '1px'};
  margin: 1em;
  padding: 0.3em 0.8em;
  border: none;
  outline: none;
  border-radius: 5px;
`;

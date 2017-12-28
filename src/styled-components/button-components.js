import styled, {css} from 'styled-components'

export const RectButton = styled.button`
  background-color: ${props => props.bgc ? props.bgc : 'grey'};
  color: ${props => props.color ? props.color : 'white'};
  font-size: ${props => props.size ? props.size : '1em'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  letter-spacing: ${props => props.spacing ? props.spacing : '1px'};
  padding: 0.5em 0.8em;
  border: none;
  outline: none;
  border-radius: 5px;
`;

export const RoundButton = styled.button`
  background-color: ${props => props.bgc ? props.bgc : 'grey'};
  color: ${props => props.color ? props.color : 'white'};
  font-size: ${props => props.size ? props.size : '1.2em'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  letter-spacing: ${props => props.spacing ? props.spacing : '1px'};
  padding: ${props => props.padding ? props.padding : '0.5em 0.7em'};
  border: none;
  outline: none;
  border-radius: ${props => props.radius ? props.radius : '10px'};
`;

import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.bgc || 'grey'};
  color: ${props => props.color || 'white'};
  border: none;
  outline: none;
`;

export const RectButton = Button.extend`
  font-size: ${props => props.size || '1.1em'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  letter-spacing: ${props => props.spacing || '1px'};
  padding: ${props => props.padding || '0.5em 0.8em'};
  border-radius: ${props => props.radius || '0.4em'};
`;

export const RoundButton = Button.extend`
  font-size: ${props => props.size || '1.2em'};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  padding: ${props => props.padding || '0.5em 0.7em'};
  border-radius: ${props => props.radius || '1.25em'};
`;

export const AddEventButton = RoundButton.extend`
  background-color: rgba(76, 175, 80, 0.8);
  font-size: 2.2em;
  padding: 0 12.5px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 100;
  
  @media (min-width: 550px) {
     position: absolute;
     top: 0;
     bottom: auto;
  }
`;

export const ListButton = Button.extend`
  background-color: ${props => (props.isSelected && '#3f51b5') || props.bgc || '#2196f3'};
  width:100%;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  text-align: left;
  
  &:hover {
    background-color: #3f51b5;
  }
`;

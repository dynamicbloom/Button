import React from 'react';
import styled from 'styled-components';

const theme = {
    red: {
        default : '#d42f2f',
        hover: '#ba2b2b'
    }
}

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  color: white;
  padding: 10px 60px;
  border-radius: 5px;
  font-size: 20px;
  outline: 0;
  box-shadow: 0px 2px 2px lightgray;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease background-color 250ms;
  &: hover {
    background-color: ${props => theme[props.theme].hover};
  }
`;

Button.defaultProps = {
    theme: 'red'
}

function clickMe() {
    alert('Hello World!')
}

export default function App() {
    return (
        <div>
            <Button onClick={clickMe}>
                Click
            </Button>
        </div>
    );
}
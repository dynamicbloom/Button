import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #66480c;
  padding: 10px 60px;
  border-radius: 5px;
  font-size: 20px;
  outline: 0;
  box-shadow: 0px 3px 3px lightgray;
  text-transform: uppercase;
  cursor: pointer;
`;

function clickMe() {
    alert('Happy World! And I am more dark')
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
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #66bb6a;
  padding: 10px 60px;
  border-radius: 5px;
  font-size: 20px;
  outline: 0;
  box-shadow: 0px 2px 2px lightgray;
  text-transform: uppercase;
  cursor: pointer;
`;

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
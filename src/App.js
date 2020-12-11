import React from 'react';

function clickMe() {
    alert('Hello World!')

}

export default function App() {
    return (
        <div>
            <button onClick={clickMe}>
                Click
            </button>
        </div>

    );

}
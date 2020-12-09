import React from 'react';

function Button() {

    function clickHandler() {
        alert('Hello World')
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default Button
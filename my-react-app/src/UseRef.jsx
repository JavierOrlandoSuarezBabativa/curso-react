// eslint-disable-next-line no-unused-vars
import React, {useState, useRef, useEffect} from 'react';


function UseRef() {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log('Component Render');
        console.log(inputRef)
    })

    function handleNumber(){
        inputRef.current.focus();
        inputRef.current.style.background = 'blue'
    }

    return(
        <div>
            <button onClick={handleNumber}>Click me!</button><br />
            <input ref={inputRef}/>
        </div>
    )
    }

export default UseRef
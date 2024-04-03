// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'

function UseEffectMethod() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // })

    // useEffect(() => {
    //     document.title = `My counter program`
    // })

    useEffect(() => {
        document.title = `Color: ${count} ${color}`
    }, [color, count])

    function addCount(){
        setCount(prevState => prevState + 1)
    }

    function substrackCount(){
        setCount(prevState => prevState - 1)
    }

    function changeColor(){
        setColor(prevColor => prevColor === 'green' ? 'red' : 'green')
    }


    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substrackCount}>Substrack</button><br/>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
    }

export default UseEffectMethod
// eslint-disable-next-line no-unused-vars
// importado desde node-modules
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react" 

function Counter() {

        const [count, setCount] = useState(0);

        const counterColor = (classToCreate) => {
            document.getElementById('countDisplay').className = `counter-button-${classToCreate}`
        }

        const increment = () => {
            setCount(count + 1);
            if(count >= 1){
                counterColor('positive')
            }
            
        }

        const decrement = () => {
            setCount(count - 1)
            if(count < 0){
                counterColor('negative')
            }
        }
        
        const reset = () => {
            let className = document.getElementById('countDisplay')
            const currentClassName = document.getElementById('countDisplay').className
            className.classList.remove(currentClassName)
            className.classList.add('counter-button-neutro')
            setCount(0)
        }

    return(
        <div className="counter-container">
            
            <p id="countDisplay" className="count-display">{count}</p>

            <button className="counter-button" onClick={decrement}>Decrement</button>

            <button className="counter-button" onClick={reset}>Reset</button>

            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter
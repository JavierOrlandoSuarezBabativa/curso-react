// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

function ColorPicker() {

    const [color, setColor] = useState('#ffffff');

    function handleColorChange(event){
        setColor(event.target.value)
    }


    return(
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{background: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label htmlFor="">Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}

export default ColorPicker
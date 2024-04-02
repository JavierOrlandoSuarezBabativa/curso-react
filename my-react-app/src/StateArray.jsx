// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

function StateArray() {

    const [foods, setFoods] = useState(['apple', 'orange', 'banana']);

    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = '';
        setFoods(prevFoods => [...prevFoods, newFood])
        
    }

    function handleRemoveFoods(index){
        setFoods(foods.filter((_, i) => i !== index))
    }

   
    return(
        <div>
            <h2>List of food</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFoods(index)} >{food} </li>)}
            </ul>
            <input type="text" placeholder='Enter food name' id='foodInput' />
            <button onClick={handleAddFood} >Add food</button>
        </div>
    )
}

export default StateArray
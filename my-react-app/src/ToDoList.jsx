// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

function toDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(prevtasks => [...prevtasks, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks)
        
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index -1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index <  tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return(
        <div className='to-do-list'>
            <h1>To-do List</h1>
            <div>
                <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange}/>
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => <li key={index}>{task}
                                                <button onClick={() => deleteTask(index)}>Delete</button>
                                                <button onClick={() => moveTaskUp(index)}>Up</button>
                                                <button onClick={() => moveTaskDown(index)}>Down</button></li>)}
            </ol>
        </div>
    )
    }

export default toDoList
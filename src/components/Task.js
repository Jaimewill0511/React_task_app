import React from 'react'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from "react-icons/ri"
import {useState} from 'react'

const Task = ({task, onClick, onToggle}) => {

    const [state, setstate] = useState(true)
    const handleClick = () => {
                 setstate(false);
                 setTimeout(() =>{ onClick(task._id); }, 150);
        }
    
    return (
        <div className= {`task ${task.reminder? "reminder" : ''}`} onDoubleClick={()=> {onToggle(task._id)}} >
            <h3 >{task.text} 
            {state === true? (<RiCheckboxBlankCircleLine  
            onClick={handleClick}/>) : (<RiCheckboxCircleLine  onClick={handleClick}/>)} </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task

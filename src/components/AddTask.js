import {useState} from 'react'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import DateTimePicker from 'react-datetime-picker';
// import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleCkeck=(e)=>{
        setReminder(e.currentTarget.checked) 
          
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!text){
            alert("Text can't be blank")
            return
        }
        onAdd({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)


    }
    return (
       <form className='add-form' onSubmit={handleSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input placeholder='Add Task' type='text' value={text} onChange={handleChange}/>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <DateTimePicker onChange={(date) => setDay(date)} value={day}/>
            {/* <input placeholder='Add Day and time' type='text' value={day} onChange={handleChange}/> */}
        </div>
        <div className='form-control form-control-check'>
            <label>Set Remainder</label>
            <input checked={reminder} type='checkbox' value={reminder} onChange={handleCkeck}/>
        </div>
        <input type='submit' value='Save task' className='btn btn-block'/>
       </form>
    )
}

export default AddTask

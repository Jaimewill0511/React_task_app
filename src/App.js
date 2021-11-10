import Header from './components/Header';
import Tasks from './components/Tasks'
import {useState, useEffect} from 'react'
import AddTask from './components/AddTask';




function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setshowAddTask] = useState(false)
  

useEffect(() => {
    const getTasks = async ()=> {
      const serverTasks = await fetchTasks()
      setTasks(serverTasks.tasks)

      
    }
    
    getTasks();
  }, [])

const fetchTasks = async () => {
    const res = await fetch('https://reacttask-app-backend.herokuapp.com/tasks')
    const data = await res.json();
    return  data
    
  
  }
const fetchTask = async (id) => {
    const res = await fetch(`https://reacttask-app-backend.herokuapp.com/${id}`)
    let data = await res.json();
    data = await data.task
    return  data
  
  }
const deleteTask = async (id) => {
    await fetch(`https://reacttask-app-backend.herokuapp.com/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter(task => task._id !== id))
  }
const submit = async (task) =>{
    const currentYear = new Date().getFullYear().toString(); 
    task.day = task.day.toString()
    task.day = `${task.day.slice(0, 3)}, ${task.day.slice(8, 10)} ${task.day.slice(4, 7)} ${currentYear === task.day.slice(11, 15)? '':task.day.slice(11, 15)}, ${task.day.slice(16, 21)} `
    const res = await fetch('http://localhost:8888/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(task),
})

const data = await res.json();
setTasks([...tasks , data.task])
  }

const handleToggle = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder }



    const res = await fetch(`https://reacttask-app-backend.herokuapp.com/${id}`, {
      method: 'PUT',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
})
    let data = await res.json()
    data = data.task;

    setTasks(tasks.map(task =>
      task._id === id ? {
        ...task,
        reminder: data.reminder
      } :
      task))
  }

  return ( 
    <div className = "container" >
      
      <Header click={setshowAddTask} state={showAddTask}/> 
      {showAddTask && <AddTask onAdd={submit}/>}
      {tasks.length > 0 ? ( < Tasks className = 'task'
          tasks = {
            tasks
          }
          onClick = {
            deleteTask
          }
          onToggle = {
            handleToggle
          }
          />) : ("No tasks to show. Add new ones")}
          
          
          
          </div>
         
        );
      }

      export default App;

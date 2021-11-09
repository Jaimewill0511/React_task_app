import Task from './Task'
const Tasks = ({tasks, onClick, onToggle}) => {
    return (
        <>
            {tasks.map(task => {
              return  <Task 
              key={task._id} 
              task={task}
              onClick={onClick}
              onToggle={onToggle}

              />
                
            })}
        </>
    )
}

export default Tasks

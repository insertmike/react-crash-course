import Task from './Task'

export const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {
            tasks.length > 0 ?
            tasks.map((task) => (
            <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}></Task>
            )) : 'No Tasks'
            }
        </>
    )
}

export default Tasks;
import { useState } from 'react'

export const Tasks = () => {
    const [tasks, setTasks] = useState([{
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'Beauty Studio',
        day: 'Feb 5th at 2:30 pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Base Jump Time',
        day: 'Feb 5th at 2:30 pm',
        reminder: false,
    },
    {
        id: 4,
        text: 'Massage Time',
        day: 'Feb 5th at 2:30 pm',
        reminder: false,
    }])
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks;
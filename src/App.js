import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
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

  const name = 'Brad';
  const x = true;

  // Toggle Reminder
  const  toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  // DELETE TASK
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title = 'tes'/>
      <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
    </div>
  );
}

export default App;

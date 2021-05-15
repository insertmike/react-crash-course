import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  const name = 'Brad';
  const x = true;

  // Toggle Reminder
  const  toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }
  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }


  // DELETE TASK
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title = 'tes'/>
      {showAddTask && <AddTask onAdd={addTask}/> }
      <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
    </div>
  );
}

export default App;

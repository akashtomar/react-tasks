import { useState } from "react";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: "reactjs", day: "D day", reminder: true},
    {id: 2, text: "Big Data", day: "D day +1", reminder: false},
    {id: 3, text: "Assignments", day: "D day +2", reminder: true}
    ]);
  const [lastID, setLastID] = useState(3);
  const [showAddTask, setShowAddTask] = useState(false);

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>{ return task.id !== id}));
  }
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task)=>{return task.id === id ? {...task, reminder: !task.reminder} : task}))
  }
  const addTask = (task) =>{
    const newTask = {id: lastID +1, ...task};
    setLastID(lastID+1);
    setTasks([...tasks, newTask]);
    
  }
  const handleBtnAdd = () =>{
    setShowAddTask(!showAddTask);
  } 
  return (
    <div className="container">
      <Header onBtnAdd={handleBtnAdd} showAdd={showAddTask} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks'}
    </div>
  );
}

export default App;

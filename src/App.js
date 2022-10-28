import { useState } from 'react';
import TaskList from './TaskList';
import TaskHead from './TaskHead';
import TaskForm from './TaskForm';
function App() {

  const [tasks, setTask] = useState([
  
    { id: 1, text: "Faire les courses", done: false },
    { id: 2, text: "Ménage !", done: true },

  ])

  const addTask = (text) => {
    const task = {
      text,
      id: Date.now(),
      done: false
    }
    setTask([...tasks, task]);
  };

  const deleteTask = (id) => {
    const filterTask = tasks.filter((t) => t.id !== id);
    setTask(filterTask);
  }

  const ToggleTask = (id) => {
    const realTask = tasks.find((t) => t.id === id);
    const index = tasks.findIndex((t) => t.id === id);
    
    const taskCopy = { ...realTask };
    const taskListCopy = [...tasks];

    taskCopy.done = !taskCopy.done;
    taskListCopy[index] = taskCopy

    setTask(taskListCopy);
  }
  return (
    <div className="App">
      <section>
        <TaskHead task={tasks} />
        <TaskList
          toggle={ToggleTask}
          delete={deleteTask}
          task = {tasks}
        />
      </section>
      <section>
        <TaskForm addTask={addTask} />
      </section>
    </div>
  );
}

export default App;

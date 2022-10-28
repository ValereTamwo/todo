import React from 'react'
import {useState} from 'react'


function TaskForm(props) {
    const [text, setText] = useState('');
    const handleSubmit = (event) => {

        event.preventDefault();
        props.addTask(text)
        setText('');
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
    </div>
  )
}

export default TaskForm
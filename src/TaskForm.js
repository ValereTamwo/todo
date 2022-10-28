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
    <div className='relative left-[23vw] top-[10vh]'>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='w-[30vw] p-[20px] border-[0.5px] border-[#33] bg-[aliceblue] rounded-[10px]  h-[4vh] text-[#333]'
      />
    </form>
    </div>
  )
}

export default TaskForm
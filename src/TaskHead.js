import React from 'react'

function TaskHead(props) {
    const undoneTask = props.task.filter((t) => t.done === false)
  return (
      <div>
        <header className='w-full h-[10vh] shadow-inner bg-[aliceblue] shadow-slate-400'>
            <h1>Soft AGENDA </h1>
            <p>
               Tâches à faire : <strong>{undoneTask.length}</strong>
             </p>
        </header>
    </div>
  )
}

export default TaskHead
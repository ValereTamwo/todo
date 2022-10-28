import React from 'react'

function TaskHead(props) {
    const undoneTask = props.task.filter((t) => t.done === false)
  return (
      <div>
        <header className='w-full h-[20vh] shadow-inner bg-[aliceblue] shadow-slate-400 justify-start p-[20px]  text-[#333]'>
            <h1 className='font-bold text-[30px] color relative left-[17vw]'>Soft  AGENDA </h1>
            <p className='left-[19vw] relative text-[15px] top-[5vh]'>
               Tâches à faire : <strong className='text-[23px]'>{undoneTask.length}</strong>
             </p>
        </header>
    </div>
  )
}

export default TaskHead
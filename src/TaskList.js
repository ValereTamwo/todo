import React from 'react'
import Taskitem from './Taskitem'

function taskList(props) {
  return (
    <>
      <div className='relative top-[4vh]'>
      {props.task.map((t) => (
        <Taskitem
          task={t}
          toggle={props.toggle}
          delete={props.delete}
          key={t.id}
          
        />
      ))}
        </div>
    </>
  )
}

export default taskList
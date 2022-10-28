import React from 'react'
import Taskitem from './Taskitem'

function taskList(props) {
  return (
    <>
      {props.task.map((t) => (
        <Taskitem
          task={t}
          toggle={props.toggle}
          delete={props.delete}
          key={t.id}
        />
      ))}
    </>
  )
}

export default taskList
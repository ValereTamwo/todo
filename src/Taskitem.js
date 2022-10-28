import React from 'react'

function Taskitem(props) {
  return (
      <div>
          <label>
              <input type="checkbox" checked={props.task.done} onChange={()=>{props.toggle(props.task.id)}} />
              {props.task.text}
              <span role={'button'} onClick={()=>{props.delete(props.task.id)}}>X</span>
          </label>
    </div>
  )
}

export default Taskitem
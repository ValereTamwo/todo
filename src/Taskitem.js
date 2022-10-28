import React from 'react'

function Taskitem(props) {
  return (
      <div className='w-[50vw] h-[7vh] border-[1px] mt-[10px] rounded-[10px] p-[10px] text-[#333] relative left-[30vw]'>
          <label className='w-[] text-center justify-center items-center'>
              <input type="checkbox"  className='w-[25px] h-[25px] relative left-[5vw]' checked={props.task.done} onChange={()=>{props.toggle(props.task.id)}} />
             <span className='relative left-[10vw]'> {props.task.text}</span>
              <span role={'button'} onClick={()=>{props.delete(props.task.id)}} className='h-[70px] p-[6px] relative left-[20vw] w-[70px] ml-[8px] bg-[#db3d3d] text-[white] '>X</span>
          </label>
    </div>
  )
}

export default Taskitem
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data);
  
  return (
    <div id='tasklist' className='overflow-x-auto h-[55%] w-full mt-10 flex items-center justify-start gap-5 py-5 flex-nowrap'> 

    {data.tasks.map((elem, idx) => {
      if(elem.activeTask){
        return <AcceptTask key={idx} data={elem}/>
      }

      if(elem.newTask){
        return <NewTask key={idx} data={elem} />
      }

      if(elem.completedTask){
        return <CompleteTask key={idx} data={elem} />
      }

      if(elem.failedTask){
        return <FailedTask key={idx} data={elem}  />
      }

      return null; // Add fallback return
    })}
    
    </div>
  )
}

export default TaskList
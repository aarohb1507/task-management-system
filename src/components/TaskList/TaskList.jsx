import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  console.log(data);
  
  return (
    <div id='tasklist' className='overflow-x-auto h-[55%] w-full mt-10 flex items-center justify-start gap-5 py-5 flex-nowrap'> 

    {data.tasks.map((elem)=>{
      if(elem.activeTask){
        return <AcceptTask/>
      }

      if(elem.newTask){
        return <NewTask/>
      }

      if(elem.completedTask){
        return <CompleteTask/>
      }

      if(elem.failedTask){
        return <FailedTask/>
      }
    }
    )}
    
    </div>
  )
}

export default TaskList
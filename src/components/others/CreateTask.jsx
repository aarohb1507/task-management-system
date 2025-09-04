import React, { useState } from 'react'
import { getLocalStorage } from '../../utils/localStorage'

const CreateTask = () => {
  // State for form inputs
  const [title, setTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const[newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    setNewTask({title, category, taskDate, description, activeTask:false,newTask:true,failedTask:false, completedTask:false})
    const data = JSON.parse(localStorage.getItem('employees'))
    data.forEach(function(elem){
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskCounts.new = elem.taskCounts.new+1
      }
      
    })
    localStorage.setItem('employees', JSON.stringify(data))






    setTitle("")
    setTaskDate("")
    setAssignTo("")
    setCategory("")
    setDescription("")
  }

  return (
   <div className='mt-7 p-5 bg-[#1c1c1c] rounded'>
        <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>

          <div className='w-1/2 text-white'>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5 mt-0.5'>Task Title</h3>
              <input 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
                type='text' 
                placeholder='Make a UI design'
                required 
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5 mt-0.5'>Date</h3>
              <input 
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className='[color-scheme:dark] text-white py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
                type='date'
                required
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5 mt-0.5'>Assign to</h3>
              <input 
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
                type='text' 
                placeholder='employee name'
                required
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5 mt-0.5'>Category</h3>
              <input 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='py-1 px-2 w-4/5 text-sm rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' 
                type='text' 
                placeholder='design, dev, etc'
                required
              />
            </div>

          </div>

          <div className='w-1/2'>
            <h3 className='text-sm text-gray-300 mb-0.5 mt-0.5'>Description</h3>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='text-white w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]' 
              cols={30} 
              rows={10}
              required
            ></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
              Create Task
            </button>
          </div>

        </form>
   </div> 
  )
}

export default CreateTask
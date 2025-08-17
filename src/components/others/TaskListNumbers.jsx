import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex w-100vw justify-between gap-5 mt-10'>
      <div className='bg-red-400 w-[45%] rounded-xl px-9 py-6'>
        <h2 className='font-medium text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div> 

      <div className='bg-blue-400 w-[45%] rounded-xl px-9 py-6'>
        <h2 className='font-medium text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>

      <div className='bg-green-400 w-[45%] rounded-xl px-9 py-6'>
        <h2 className='font-medium text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>

      <div className='bg-yellow-400 w-[45%] rounded-xl px-9 py-6'>
        <h2 className='font-medium text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
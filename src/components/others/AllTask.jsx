import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] text-white p-5 mt-5 rounded h-50'>
      <div className='bg-black py-2 px-4 rounded flex justify-between mb-2'>
        <h2 className='w-1/5'>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
      </div>
      <div className='overflow-auto h-[80%]'>
        {authData.employees.map((elem, idx) => (
          <div key={idx} className='bg-[#2c2c2c] py-2 px-4 rounded flex justify-between mb-2 pl-17'>
            <h2 className='w-1/5 font-medium text-white'>{elem.firstName}</h2>
            <h3 className='w-1/5 font-medium text-blue-500'>{elem.taskCounts.new}</h3>
            <h5 className='w-1/5 font-medium text-yellow-500'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 font-medium text-green-500 pl-3'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 font-medium text-red-500 pl-4'>{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask
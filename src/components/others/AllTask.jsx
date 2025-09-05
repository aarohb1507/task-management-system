import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  // read provider value correctly (it gives an object)
  const { userData } = useContext(AuthContext) || {}

  // guard: if userData or employees not ready, use empty array
  const employees = userData?.employees || []

  // optional: show a friendly message if no employees yet
  if (employees.length === 0) {
    return (
      <div className="bg-[#1c1c1c] text-white p-5 mt-5 rounded h-50">
        <div className="bg-black py-2 px-4 rounded mb-2">
          <h2>No employees found yet.</h2>
          <p className="text-sm opacity-80">Maybe the provider hasn't loaded or localStorage is empty.</p>
        </div>
      </div>
    )
  }

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
        {employees.map((elem, idx) => (
          <div key={idx} className='bg-[#2c2c2c] py-2 px-4 rounded flex justify-between mb-2 pl-17'>
            <h2 className='w-1/5 font-medium text-white'>{elem.firstName}</h2>
            <h3 className='w-1/5 font-medium'>{elem.taskCounts?.new ?? 0}</h3>
            <h5 className='w-1/5 font-medium'>{elem.taskCounts?.active ?? 0}</h5>
            <h5 className='w-1/5 font-medium'>{elem.taskCounts?.completed ?? 0}</h5>
            <h5 className='w-1/5 font-medium'>{elem.taskCounts?.failed ?? 0}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask

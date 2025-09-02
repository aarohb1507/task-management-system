import React from 'react'

const AcceptTask = ({data}) => {
  return (
      <div className='flex-shrink-0 w-[300px] h-full bg-green-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-2 rounded-xl text-sm'>{data.category}</h3>
          <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='mt-2 text-sm'>
          {data.description}
        </p>
        <div className='mt-4 flex justify-between'>
          <button className='bg-green-600 px-2 py-1.5 text-sm'>Mark as Completed</button>
          <button className='bg-red-600 px-2.5 py-1.5 text-sm'>Mark as Failed</button>
        </div>
      </div>
  

  )
}

export default AcceptTask
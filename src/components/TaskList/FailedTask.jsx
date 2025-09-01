import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 w-[300px] h-full bg-yellow-400 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 px-3 py-2 rounded-xl text-sm'>High</h3>
          <h4 className='text-sm'>19 aug 2025</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Study consistently</h2>
        <p className='mt-2 text-sm'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, aspernatur. Aut libero provident deserunt eveniet?
        </p>
        <div className='mt-2'>
          <button className='w-full'>Failed</button>
        </div>
      </div>
  )
}

export default FailedTask
import React, { useState, useEffect } from 'react'

const Header = (props) => {
  const [username, setUsername] = useState('')

  useEffect(() => {
    try {
      const raw = localStorage.getItem('loggedInUser')
      if (!raw) {
        // nothing in storage: try props.data (EmployeeDashboard passes this)
        setUsername(props.data?.firstName || '')
        return
      }

      const parsed = JSON.parse(raw) // now we have an object
      const role = parsed?.role

      if (role === 'employee') {
        // try the stored employee data first, then fallback to props.data
        setUsername(parsed?.data?.firstName || props.data?.firstName || 'Employee')
      } else if (role === 'admin') {
        setUsername('Admin')
      } else {
        setUsername(props.data?.firstName || '')
      }
    } catch (err) {
      console.error('Header: error reading loggedInUser', err)
      setUsername(props.data?.firstName || '')
    }
  }, [props.data])

  const logOutUser = () => {
    // remove the session entry cleanly
    localStorage.removeItem('loggedInUser')
    // tell parent we're logged out (use the same sentinel your App expects)
    props.changeUser(null)
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-white text-2xl font-medium'>
        Hello, <br />
        <span className='text-3xl font-semibold'>{username}👋🏻</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  )
}

export default Header

import React, { use, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setuser] = useState(null)
  

  return (
    <>
       {/* {!user ? <Login /> : ''}  */}
       {/* <EmployeeDashboard/> */}
       <AdminDashboard/>
    </>
  )
}

export default App
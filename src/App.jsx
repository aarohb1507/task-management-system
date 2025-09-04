import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)  
  const authData = useContext(AuthContext)
  
  // Load stored user data on mount and when authData changes


  useEffect(() => {
    try {
      const loggedInUser = localStorage.getItem("loggedInUser")
      // Only proceed if we have stored data and auth context is loaded
      if (!loggedInUser || !authData?.employees) {
        return
      }
      
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      
      if (userData.role === 'employee') {
        setloggedInUserData(userData.data)
      }
    } catch (error) {
      console.error('Error loading stored user data:', error)
      localStorage.removeItem("loggedInUser")
    }
  }, [authData?.employees])    // Only depend on employees array

  const handleLogin = (email, password) => {
    if(email === 'admin@example.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}))
    } else if(authData?.employees) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      )
      if(employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({
          role: 'employee', 
          data: employee
        }))
      } else {
        alert("Invalid credentials")
      }
    } else {
      alert("Authentication system not ready")
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser = {setUser} />}
      {user === 'employee' && <EmployeeDashboard data={loggedInUserData} changeUser = {setUser} />}
    </>
  )
}

export default App
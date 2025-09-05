import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  // Consume the provider object correctly
  const { userData } = useContext(AuthContext) || {}   // userData holds { employees: [...] }

  // Load stored user data on mount and when employees change
  useEffect(() => {
    try {
      const loggedInUser = localStorage.getItem("loggedInUser")
      // Only proceed if we have stored data and provider has employees
      if (!loggedInUser || !userData?.employees) {
        return
      }

      const userDataFromStorage = JSON.parse(loggedInUser)
      setUser(userDataFromStorage.role)

      if (userDataFromStorage.role === 'employee') {
        setLoggedInUserData(userDataFromStorage.data)
      }
    } catch (error) {
      console.error('Error loading stored user data:', error)
      localStorage.removeItem("loggedInUser")
    }
  }, [userData?.employees])    // re-run when employees change in provider

  const handleLogin = (email, password) => {
    // admin shortcut
    if (email === 'admin@example.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    // make sure provider's employees are present
    const employees = userData?.employees || []

    if (employees.length === 0) {
      // provider hasn't loaded employees yet
      alert("Authentication system not ready")
      return
    }

    const employee = employees.find(
      (e) => e.email === email && e.password === password
    )

    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({
        role: 'employee',
        data: employee
      }))
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={setUser} />}
      {user === 'employee' && <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />}
    </>
  )
}

export default App

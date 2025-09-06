import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  // keep employees in React state so components re-render when it changes
  const [userData, setUserData] = useState({ employees: [] })

  // helper to re-read employees from localStorage and update state
  const refreshEmployees = () => {
    const stored = getLocalStorage()
    const employees = (stored && stored.employees) ? stored.employees : []
    setUserData({ employees })
  }

  useEffect(() => {
    // Seed localStorage (first-run) then load to state
    setLocalStorage()
    refreshEmployees()
  }, [])

  return (
    <AuthContext.Provider value={{ userData, setUserData, refreshEmployees }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
//  localStorage.clear()
  const [userData, setUserData] = useState(null)
  
  useEffect(
    ()=>{
      const{employees} = getLocalStorage()
      setUserData({employees})
      setLocalStorage()
    },[]
  )



  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("Email is: ", email);
    console.log("Password is: ", password);
    
    setEmail("");
    setPassword("");
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={
          (e) => {
            submitHandler(e);
          }
        } className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required className= 'w-80 border-2 outline-none border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 bg-transparent' type='email' placeholder='Enter Your Email'/> 
          <input 
          value = {password}
          onChange={(e) => setPassword(e.target.value)}
          required className= 'w-80 border-2 mt-3 outline-none border-emerald-600 text-xl py-3 px-5 rounded-full  placeholder:text-gray-400 bg-transparent' type='password' placeholder='Enter Your Password'/> 
          <button className='w-80 mt-5 text-white border-none outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
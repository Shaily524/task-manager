import React from 'react'
import { useState } from 'react'

const Login = () => { 
   const [email, setEmail ] = useState('')
   const[password, setPassword] = useState ('')
 
 
    const submitHandler = (e)=>{
        e.preventDefault() 
        console.log("email us",email)
        console.log("password is",password)
        setEmail("")
        setPassword("")

    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'> 
        <form  
        onSubmit={(e)=>{
        submitHandler (e)
        
        



        }
}
        
        className='flex flex-col items-center justify-center' >             
<input onChange={()=> {

console.log("CHaanging") }}


required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='enter your email'/> 
<input required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-4 placeholder:text-gray-400'  placeholder='Enter password'/> 
<button  className='  text-white outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-white'>Log In </button>
        </form>
      </div>
    </div>
  )
}

export default Login

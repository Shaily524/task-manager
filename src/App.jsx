import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useState } from 'react'
const App = () => {

  const[user,setUser ] = useState(null)

const handleLogin = ( email,password) => {
if(email=='admin@me.com' && password=='123'){
  setUser('admin')
  console.log(user)
}else if(email=='user@me.com' && password=='123'){
  setUser('employe')
  console.log(user)
}
 else {
  alert("Invalid Credentials")
 }

}
handleLogin('usern@me.com',123)
  return (
<>  
{!user ? <Login handleLogin={handleLogin} /> : ''}


{/*<EmployeeDashboard />*/}
{/*} <AdminDashboard/>*/}
</>


  )
}

export default App

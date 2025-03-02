import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utlis/localStorage'
import { getLocalStorage } from './utlis/localStorage'
const App = () => {

useEffect(() => {
  //setLocalStorage(.)
  getLocalStorage()
},) 


  return (
<> 

<Login/> 
<EmployeeDashboard />
 <AdminDashboard></AdminDashboard>
</>


  )
}

export default App

import React from 'react'
import Header from "../Dashboard/other/Header"
import TaskListNumber from './other/TaskListNumber'
import TaskList from '../TaskList/Tasklist'
const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C]. h-screen mt-10'>
     <Header/>
     <TaskListNumber/>
     <TaskList/>
    </div>
  )
}

export default EmployeeDashboard

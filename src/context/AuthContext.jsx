import React, { useEffect } from 'react'
import { getLocalStorage }  from '../utlis/localStorage'
import { setLocalStorage }  from '../utlis/localStorage'


const AuthContext = ({children}) => {
 // useEffect() => {
   // setLocalStorage()
   // getLocalStorage()
  // },)
  

  return (
    <div>{children}</div>
  )
}

export default AuthContext

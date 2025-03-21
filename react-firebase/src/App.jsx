import React from 'react'
import { googleauth, login, signup } from './config/firebase'

const App = () => {
  const handlegoogleLogin=async()=>{
   let user=await googleauth();
   console.log(user);
  }

const Signup=async()=>{
  let email="yegik44906@gamebcs.com"
  let password="password"
  let user=await signup(email,password)
  console.log(user);
}

const Login=async()=>{
  let email="yegik44906@gamebcs.com"
  let password="password"
  let user=await login(email,password)
  console.log(user);
}

  return (
    <div>
      <button onClick={handlegoogleLogin}>login</button>
      <button onClick={Signup}>Signup</button>
      <button onClick={Login}>Login</button>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'


const SignIn = () => {

 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')

 const submit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
      }).catch((error)=> {
        console.log(error);
        alert("wrong user credentials")
      })

      setEmail("")
      setPassword("")
 }
     
  return (
    <div>
            <h1>Login Your Account</h1>
            <form action="" onSubmit={submit}>

                <input type="email"  value={email}  onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Enter password' />
                <button style={{cursor:"pointer"}}>SignIn</button>
                   
            </form>


    </div>
  )
}

export default SignIn
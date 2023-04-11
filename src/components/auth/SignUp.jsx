import React, { useState } from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'


const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
   
    const submit = (e) => {
       e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
           console.log(userCredential);
         }).catch((error)=> {
           console.log(error);
         })
    }
        
     return (
       <div>
               <h1>Create Your Account</h1>
               <form action="" onSubmit={submit}>
   
                   <input type="email"  value={email}  onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' />
                   <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Enter password' />
                   <button>SignUp</button>
                      
               </form>
   
   
       </div>
  )
}

export default SignUp
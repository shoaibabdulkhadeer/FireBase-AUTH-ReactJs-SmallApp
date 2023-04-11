import React, { useEffect, useState } from 'react'
import { onAuthStateChanged ,signOut } from 'firebase/auth'
import { auth } from '../firebase'

const AuthDetails = () => {

const [authUser , setAuthUser] = useState(null)

useEffect(() => {
  const listen = onAuthStateChanged(auth ,(user) => {
    if(user){
        setAuthUser(user);
    } else {
        setAuthUser(null);
    }
  })

  return () => {
    listen ();
  }
},[])
 
const userSignUut = () => {
    signOut(auth)
    .then(() => {
        console.log("successfully logged out")
    }).catch((error) => {
        console.log(error);
    })
    
}
  return (
    <div>
    {authUser ? 
     <div style={{display:'flex',flexDirection:"column",alignItems:"center"}}>
     <p>Hello Your are Signed In</p>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bcahUF045k3G5DI_xMusY4aZ0lpot2E1EOEwakm2ykLlUq7KXdY7AEtuD5iiAtPnu7A&usqp=CAU" 
     alt="" width={150} />
     <button onClick={userSignUut} style={{cursor:"pointer"}}>Sign Out</button>
    </div>
    : (<p>Signed Out</p>) }


    </div>
  )
}

export default AuthDetails
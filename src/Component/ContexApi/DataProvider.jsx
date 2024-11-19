import React, { useEffect, useState } from 'react'
import { Contex } from './Contex'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';


const DataProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  // console.log(user)

  const createNewUser = (email, password) => {
    // console.log("dfdy")
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const contexApiData = {
    user, setUser, createNewUser, logOut, userLogin
  }
  return (
    <Contex.Provider value={contexApiData}>
      {children}
    </Contex.Provider>
  )
}

export default DataProvider
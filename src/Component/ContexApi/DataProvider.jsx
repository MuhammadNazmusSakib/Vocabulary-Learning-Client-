import React, { useEffect, useState } from 'react'
import { Contex } from './Contex'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';


const DataProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
   console.log(user)

  const createNewUser = (email, password) => {
    // console.log("dfdy")
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
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

  // update user profile
  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }

  const contexApiData = {
    user, setUser, createNewUser, logOut, userLogin, loading, updateUserProfile
  }
  return (
    <Contex.Provider value={contexApiData}>
      {children}
    </Contex.Provider>
  )
}

export default DataProvider
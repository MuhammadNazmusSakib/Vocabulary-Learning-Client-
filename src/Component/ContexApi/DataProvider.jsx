import React, { useEffect, useState } from 'react'
import { Contex } from './Contex'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';


const DataProvider = ({ children }) => {

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  //  console.log(user)

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

  //  Google signIn
  const googleSignIn = () => {
    // console.log("gfyug")
    return signInWithPopup(auth, provider)
  }

  // Forgot Password..
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }

  const contexApiData = {
    user, setUser, createNewUser, logOut, userLogin, loading, updateUserProfile, googleSignIn, resetPassword
  }
  return (
    <Contex.Provider value={contexApiData}>
      {children}
    </Contex.Provider>
  )
}

export default DataProvider
import React, { useEffect, useState } from 'react'
import { Contex } from './Contex'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';
import axios from 'axios';


const DataProvider = ({ children }) => {

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light')

  // light/dark theme
  const toggleTheme = () => {
    setTheme(prev => !prev)
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
  // Set initial theme based on localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const createNewUser = (email, password) => {
    // console.log("dfdy")
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      // jwt
      if(currentUser?.email) {
        const user = {email: currentUser.email}
        axios.post(`http://localhost:5000/jwt`, user, {withCredentials: true})
        .then(res => {
          console.log(res.data)
          setLoading(false)
        })
      }
      else {
        axios.post(`http://localhost:5000/logout`, {}, {
          withCredentials: true
        })
        .then(res => {
          console.log('logout', res.data)
          setLoading(false)
        })
      }

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
    user, setUser, createNewUser, logOut, userLogin, loading, updateUserProfile, googleSignIn, resetPassword, toggleTheme, theme
  }
  return (
    <Contex.Provider value={contexApiData}>
      {children}
    </Contex.Provider>
  )
}

export default DataProvider
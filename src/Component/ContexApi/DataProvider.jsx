import React, { useState } from 'react'
import { Contex } from './Contex'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';


const DataProvider = ({children}) => {

  const [user, setUser] = useState(null)

  const createNewUser = (email, password) => {
    console.log("dfdy")
    return createUserWithEmailAndPassword(auth, email, password)
  }

    const contexApiData = {
      user, setUser, createNewUser
    }
  return (
    <Contex.Provider value={contexApiData}>
        {children}
    </Contex.Provider>
  )
}

export default DataProvider
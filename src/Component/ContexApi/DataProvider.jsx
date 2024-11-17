import React from 'react'
import { Contex } from './Contex'

const DataProvider = ({children}) => {

    const contexApiData = {

    }
  return (
    <Contex.Provider value={contexApiData}>
        {children}
    </Contex.Provider>
  )
}

export default DataProvider
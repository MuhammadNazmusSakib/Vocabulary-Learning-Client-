import React from 'react'
import DataProvider from '../ContexApi/DataProvider'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <DataProvider>
        <div>
            sakib
            <Outlet/>
        </div>
    </DataProvider>
  )
}

export default Root
import React from 'react'
import DataProvider from '../ContexApi/DataProvider'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
    <DataProvider>
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    </DataProvider>
  )
}

export default Root
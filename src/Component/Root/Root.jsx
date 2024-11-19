import React from 'react'
import DataProvider from '../ContexApi/DataProvider'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Root = () => {
  return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
  )
}

export default Root
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GlobalProvider } from '../context/GlobalContext'

export const WithNav = () => {
    return (
        <GlobalProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </GlobalProvider>
    )
}


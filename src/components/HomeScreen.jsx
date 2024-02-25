import React from 'react'
import { NavBarLive } from './NavBarLive'
import Dashboard from './Dashboard'

const HomeScreen = () => {
    return (
        <div className='home-screen bg-white dark:bg-gray-700 w-full h-screen'>
            <NavBarLive />
            <Dashboard />
        </div>
    )
}

export default HomeScreen
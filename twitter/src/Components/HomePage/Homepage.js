import React from 'react'
import Feed from '../Feed/Feed'
import Profile from '../Profile/Profile'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'
import './Homepage.css'

function Homepage() {
    return (
        <div className='homepage'>
            <Sidebar/>
            <Feed/>
            {/* <Profile/> */}
            <Widgets/>

        </div>
    )
}

export default Homepage
      


import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Widgets from '../Widgets/Widgets'
import Profile from '../Profile/Profile'
import './Profilepage.css'

function Profilepage() {
    return (
        <div className='profilepage'>
            <Sidebar/>
            <Profile/>
            <Widgets/>
        </div>
    )
}

export default Profilepage;

import React from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import './Feed.css'
// import Sidebar from '../Sidebar/Sidebar'

function Feed() {
    return (

        <div className='feed'>

            <div className='feed__header'>
                <h2>  Home </h2>
            </div>
            {/* <Sidebar/> */}
            <TweetBox />
            <Post />
        </div>
    )
}

export default Feed

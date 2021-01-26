import React, { Component } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'

function TweetBox () {
   

    
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://pbs.twimg.com/profile_images/1242623772437426176/C0WdBcXb_400x400.jpg" />
                    <input placeholder="What's happining?" type='text' />
                </div>
                <input className='tweetBox__imageInput' placeholder="Enter image URL" type='text' />

                <Button className='tweet__tweetButton'> Tweet </Button>
            </form>
        </div>
    )
}


export default TweetBox

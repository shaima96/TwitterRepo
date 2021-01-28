import React, { Component , useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import db from './data'

function TweetBox (){
const [tweetMessage ,  setTweetMessage] = useState('');
const [tweetImage , setTweetImage] = useState('');
const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
        displayName: "Hiba Tamimi",
        username: "hibatamimi",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://pbs.twimg.com/profile_images/1242623772437426176/C0WdBcXb_400x400.jpg",
      });
  
      setTweetMessage("");
      setTweetImage("");
}

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://pbs.twimg.com/profile_images/1242623772437426176/C0WdBcXb_400x400.jpg" />
                    <input 
                    onChange={e =>   setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happining?" 
                    type='text' />
                </div>
                {/* <input 
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                className='tweetBox__imageInput'
                 placeholder="Enter image URL" 
                 type='text' /> */}

                <Button 
                onClick={sendTweet}
                type ='submit'   className='tweet__tweetButton'> Tweet </Button>
            </form>
        </div>
    )
}

export default TweetBox

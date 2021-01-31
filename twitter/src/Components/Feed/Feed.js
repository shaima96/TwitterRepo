import React, { useState, useEffect } from "react";
import db from './data'
import TweetBox from "./TweetBox";
import FlipMove from 'react-flip-move'
import Post from "./Post";
import "./Feed.css";
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'


// import FlipMove from "react-flip-move";

class Feed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      username: '',
      post: '',
      img: ''
    }
  }
  componentDidMount() {
    fetch('https://twittrer.herokuapp.com/tweets',)
      .then(response => response.json())
      .then(result => {
        this.setState({ 'tweets': result.data.reverse()})
      })
      .catch(err => {
        console.error(err)
      })

  }

  sendTweet = (e) => {
    e.preventDefault()
    var role = new FormData()
    role.append("email", localStorage.getItem('email'))
    role.append("tweet", document.getElementById('tweet').value)
    role.append("img", document.getElementById('image').value)
    var option = {
      method: 'POST',
      body: role
    }
    fetch('https://twittrer.herokuapp.com/tweets', option)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        // this.setState({})
        this.componentDidMount()
      })
      .catch(err => {
        console.error(err)
      })

  }
  render() {
    return (
      <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <div className='tweetBox'>
          <form>
            <div className='tweetBox__input'>
              <Avatar src={this.state.img} />
              <input
                id='tweet' placeholder="What's happining?"
                type='text'
              />
            </div>
            <input
              id='image'
              className='tweetBox__imageInput'
              placeholder="Enter image URL"
              type='text' />

            <Button
              onClick={this.sendTweet}
              type='submit' className='tweet__tweetButton'> Tweet </Button>
          </form>
        </div>
        <FlipMove>
          {this.state.tweets.map((post, i) => {
            console.log(post)
            return (
              <Post
                key={i}
                username={post.username}
                email={post.email}
                text={post.tweet}
                avatar={post.avatar}
                img={post.img}
                likes={post.likes}
                comments={post.comments}
                retweets={post.retweets}
                date={post.date}
                time={post.time}
              />
            )
          })}
        </FlipMove>

      </div>
    );
  }
}

export default Feed;
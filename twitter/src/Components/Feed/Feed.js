import React, { useState, useEffect } from "react";
import db from './data'
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import FlipMove from 'react-flip-move'


// import FlipMove from "react-flip-move";

class Feed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tweets: []
    }
  }
  componentDidMount() {
    fetch('https://twittrer.herokuapp.com/tweets',)
      .then(response => response.json())
      .then(result => {
        this.setState({ 'tweets': result.data })
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

        <TweetBox />
        <FlipMove>
          {this.state.tweets.map((post, i) =>{ console.log(post)
              return  (
            <Post
              key={i}
              username={post.username}
              email={post.email}
              text={post.tweet}
              avatar={post.avatar}
              img={post.img}
            />
  )})}
        </FlipMove>

      </div>
    );
  }
}

export default Feed;
import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'


class TweetBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            post: '',
            img: ''
        }

    }

    getTweet() {
        var role = new FormData()
        role.append("username", this.state.username)
        role.append("post", this.state.post)
        role.append("img", this.state.img)
        var option = {
            method: 'POST',
            body: role
        }

        fetch('http://127.0.0.1:5000/tweets', option)
            .then(response => response.json())
            .then(data => {
                console.log("fffffff", data)
                this.setState({ data })
            })

        // var object1 = { '_id': 1, 'user': 'hamdalla9@gmail.com', 'post': 'hello', 'img': 'fewfe', '_id': 1, 'user': 'hamdalla9@gmail.com', 'post': 'hello', 'img': 'fewfe' };

        // const sliced = Object.keys(object1).slice(0, 4).reduce((result, key) => {
        //     result[key] = object1[key];
        //     return result;
        // }, {});

        // console.log("ss", sliced)
    }

    render() {
        return (
            <div className='tweetBox'>
                <form>
                    <div className='tweetBox__input'>
                        <Avatar src={this.state.img} />
                        <input
                            onChange={(e) => { this.setState({ post: [e.target.value] }) }}

                            placeholder="What's happining?"
                            type='text'
                            id='postTweet' />
                    </div>
                    {/* <input 
                onChange={e => setTweetImage(e.target.value)}
                value={tweetImage}
                className='tweetBox__imageInput'
                 placeholder="Enter image URL" 
                 type='text' /> */}

                    <Button
                        // onClick={this.getTweet}
                        type='submit' className='tweet__tweetButton'> Tweet </Button>
                </form>
            </div>
        )
    }
}

export default TweetBox

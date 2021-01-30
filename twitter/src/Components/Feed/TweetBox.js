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

    sendTweet() {
        var role = new FormData()
        role.append("email", localStorage.getItem('email'))
        role.append("tweet", this.state.post)
        role.append("img", this.state.img)
        var option = {
            method: 'POST',
            body: role
        }
        fetch('https://cors-anywhere.herokuapp.com/https://twittrer.herokuapp.com/tweets', option)
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
                    <input
                        onChange={(e) => { this.setState({ img: [e.target.value] }) }}
                        className='tweetBox__imageInput'
                        placeholder="Enter image URL"
                        type='text' />

                    <Button
                        onClick={this.sendTweet}
                        type='submit' className='tweet__tweetButton'> Tweet </Button>
                </form>
            </div>
        )
    }
}

export default TweetBox

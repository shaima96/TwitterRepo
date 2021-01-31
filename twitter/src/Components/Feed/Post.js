import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { details, tweets } from "../../redux/actions";

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false

    }

  }
  visit = (e) => {
    var role = new FormData()
    role.append("email", this.props.email)
    const option = {
      method: 'POST',
      body: role
    };
    fetch('https://cors-anywhere.herokuapp.com/https://twittrer.herokuapp.com/email', option)
      .then(response => response.json())
      .then(result => {
        fetch('https://cors-anywhere.herokuapp.com/https://twittrer.herokuapp.com/tweet', option)
          .then(response2 => response2.json())
          .then(result2 => {
            this.props.details(result.data)
            this.props.tweets(result2.data)
            this.setState({ redirect: true })
          })
          .catch(err => {
            console.error(err)
          })

      })
      .catch(err => {
        console.error(err)
      })
  }


  render() {
    if (this.state.redirect) {
      return <Redirect to="/profile" />
    } else {
      return (
        <div className="post" >
          <div className="post__avatar">
            <Avatar src={this.props.avatar} />
          </div>
          <div className="post__body">
            <div className="post__header">
              <div  onClick={this.visit} className="post__headerText" style={{cursor:"pointer"}}>
                <h3 >
                  {this.props.username}{this.props.date}{this.props.time}
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>{this.props.text}</p>
              </div>
            </div>
            <img id='image' src={this.props.img} alt="" height='300px' />
            <div className="post__footer">
              <div className='blueicon'><ChatBubbleOutlineIcon fontSize="small" />{this.props.comments.length}</div>
              <div style={{color:this.props.retweeted?'#7cdf7c':'black'}} className='greenicon'><RepeatIcon fontSize="small" />{this.props.retweets}</div>
              <div style={{color:this.props.liked?'#df5986':'black'}} className='pinkicon'><FavoriteBorderIcon fontSize="small" />{this.props.likes}</div>
              <div style={{color:this.props.saved?'#826ef5':'black'}} className='blueicon'><PublishIcon fontSize="small" /></div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    details: (x) => {
      dispatch(details(x));
    },
    tweets: (x) => {
      dispatch(tweets(x));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
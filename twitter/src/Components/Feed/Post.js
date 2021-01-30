import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";

    super(props)
    this.state = {
      tweets: []
    }

  }
  componentDidMount() {
    fetch('http://127.0.0.1:5000/tweets',)
      .then(response => response.text())
      .then(data => {
        console.log("dffdf",data)
        this.setState({'tweets':data})
      })
      .catch(err=>{
      console.log(err)
      })
  }

  render() {
    return (
      <div className="post" >
        <div className="post__avatar">
          <Avatar src={this.state.img} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {this.state.username}{" "}
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{this.state.text}</p>
            </div>
          </div>
          {/* <img src={this.state.img} alt="" /> */}
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
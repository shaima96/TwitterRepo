import React, { Component, forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

class Post extends Component (){
    constructor(props) {
        super(props)
        this.state = {

        }
    }
  render (){
    return (
      <div className="post" >
        <div className="post__avatar">
          {/* <Avatar src={avatar} /> */}
          <Avatar src='https://pbs.twimg.com/profile_images/1242623772437426176/C0WdBcXb_400x400.jpg' />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {/* {displayName}{" "} */}
                Hiba Tamimi
                <span className="post__headerSpecial">
                   <VerifiedUserIcon className="post__badge" /> @
                  {/* {username} */}
                  hibatamimi
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              {/* <p>{text}</p> */}
              lets start the challange 
            </div>
          </div>
          {/* <img src={image} alt="" /> */}
            <img src=' https://steamuserimages-a.akamaihd.net/ugc/849346468950683465/3647B7FB74DF0AB0A30B3AD17BECA2D30E75F7A2/' alt="" />
         
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
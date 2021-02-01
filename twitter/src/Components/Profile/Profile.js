import React, { Component } from "react";
import "./Profile.css";
import Post from "../Feed/Post";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

class Profile extends Component {
  render() {
    return (
      // --------------------------------header------------------------------------//
      <div className="profile">
        <div className="profile__header">
          <h2> {this.props.details2?.username}</h2>
          <h5> {this.props.tweets2?.length} Tweets </h5>
        </div>
        <div>
          {/* ---------------------profile box-----------------------*/}
          <div className="profile__info">
            <form>
            <Link to="/cover">
              <img
                className="img"
                src={this.props.details2?.cover}
                alt="cover"
                onClick={this.cover}
                id='cover'
              />
              </Link>
              <Link to="/avatar">
              <img
                className="profile__img"
                src={this.props.details2?.avatar}
                alt="avatar"
                onClick={this.avatar}
                id='avatar'
              />
              </Link>
              <h2> {}</h2>
              {/* <Button className='profile__followButton'> Follow </Button> */}
              <h5 className="username"> @{this.props.details2?.username}</h5>
              <h3 className="bio"> {this.props.details2?.bio} {this.props.visitor?<Button className='profile__followButton'> Follow </Button>:<Link to="/bio" style={{textDecoration: 'none'}}><Button className='profile__followButton'> Edit text </Button></Link>}</h3>
              <h3 className="followers">
                {" "}
                <span className="number">
                  {this.props.details2?.following}
                </span>{" "}
                Following{" "}
              </h3>{" "}
              <h3 className="followers" id="h3">
                {" "}
                <span className="number">
                  {" "}
                  {this.props.details2?.followers}
                </span>{" "}
                Followers{" "}
              </h3>
            </form>
          </div>
        </div>
        {/* ------------------------------post--------------------------------*/}
        <div>
          {Array.isArray(this.props.tweets2)
            ? this.props.tweets2.concat(this.props.details2.retweets).map((post, i) => {
                return (
                  <Post
                    key={i}
                    id={post._id}
                    post={post}
                    username={post.username}
                    email={post.email}
                    text={post.tweet}
                    avatar={post.avatar}
                    img={post.img}
                    comments={post.comments}
                    likes={post.likes}
                    retweets={post.retweets}
                    data={post.date}
                    time={post.time}
                  />
                );
              })
            : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    details2: state.details2,
    tweets2: state.tweets2,
  };
};

export default connect(mapStateToProps)(Profile);

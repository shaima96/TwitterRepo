import React, { Component } from "react";
import './Profile.css'
import FlipMove from 'react-flip-move'
import Post from "../Feed/Post";
import { connect } from "react-redux";




class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {


        };
    }



    render() {
        return (


            // --------------------------------header------------------------------------//
            <div className='profile'>
                <div className='profile__header'>
                    <h2 > {this.props.details2?.username}</h2>
                    <h5> {this.props.details2?.tweets} Tweets </h5>
                </div>
                <div>

                    {/* ---------------------profile box-----------------------*/}
                    <div className='profile__info'>
                        <form>
                            <img className="img" src={this.props.details2?.cover} />

                            <img className='profile__img' src={this.props.details2?.avatar} />
                            <h2 > { }</h2>
                            {/* <Button className='profile__followButton'> Follow </Button> */}
                            <h5 className='username'>  @{this.props.details2?.username}</h5>
                            <h3 className='bio'> {this.props.details2?.bio}</h3>

                            <h3 className='followers'> <span className='number'>{this.props.details2?.following}</span>   Following   </h3> <h3 className='followers' id='h3'>   <span className='number'> {this.props.details2?.followers}</span> Followers   </h3>
                        </form>
                    </div>
                </div>

                {/* ------------------------------post--------------------------------*/}


                <FlipMove>
                    {this.props.tweets2.map((post, i) => {
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
                                data={post.date}
                                time={post.time}
                            />
                        )
                    })}
                </FlipMove>

            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        details2: state.details2,
        tweets2: state.tweets2

    };
};


export default connect(mapStateToProps)(Profile);
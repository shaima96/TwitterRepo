import React, { Component } from "react";
import { Avatar, Button } from '@material-ui/core'
import './Profile.css'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: [],

        };
    }

    componentDidMount() {
        var role = new FormData()
        role.append("email", localStorage.getItem('email'))
        const option = {
            method: 'POST',
            body: role
        };
        fetch('https://cors-anywhere.herokuapp.com/https://twittrer.herokuapp.com/email', option)
            .then(response => response.json())
            .then(result => {
                console.log("dddd",result)
                this.setState({ 'details': result.data })
            })
            .catch(err => {
                console.error(err)
            })
}

render() {
    return (


        // --------------------------------header------------------------------------//
        <div className='profile'>
            <div className='profile__header'>
                <h2 > { this.props.email}</h2>
                <h5> { this.props.tweets} Tweets </h5>
            </div>
            <div>

                {/* ---------------------profile box-----------------------*/}
                <div className='profile__info'>
                    <form>
                        <img className="img" src={this.props.avatar} />

                        <img className='profile__img' src={this.props.avatar} />
                        <h2 > { }</h2>
                        {/* <Button className='profile__followButton'> Follow </Button> */}
                        <h5 className='username'>  @{this.props.email }</h5>
                        <h3 className='bio'> {this.props.bio}</h3>

                        <h3 className='followers'> <span className='number'>{this.props.following}</span>   Following   </h3> <h3 className='followers' id='h3'>   <span className='number'> {this.props.followers}</span> Followers   </h3>
                    </form>
                </div>
            </div>

            {/* ------------------------------post--------------------------------*/}

            {/* <div className="post" >
                <div className="profile__post__avatar">

                    <Avatar src='https://pbs.twimg.com/profile_images/1242623772437426176/C0WdBcXb_400x400.jpg' />
                </div>
                <div className="profile__post__body">
                    <div className="post__header">
                        <div className="profile__post__headerText">
                            <h3>

                                Hiba Tamimi
                <span className="profile__post__headerSpecial">
                                    <VerifiedUserIcon className="profile__post__badge" /> @

                  hibatamimi
                </span>
                            </h3>
                        </div>
                        <div className="profile__post__headerDescription">

                            lets start the challange
            </div>
                    </div>

                    <img className="img" src=' https://steamuserimages-a.akamaihd.net/ugc/849346468950683465/3647B7FB74DF0AB0A30B3AD17BECA2D30E75F7A2/' alt="" />

                    <div className="profile__post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div> */}

        </div>
    )
}
}



export default Profile;

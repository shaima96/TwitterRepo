import React from 'react';
import './Home.css'



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        return (
            <div className="container">
                <div className="left">
                    <ul>
                        <li className='follow'>
                            Follow your interests.
                        </li>
                        <li className='fas fa-users-friends icon'>
                            Hear what people are talking about.
                        </li>
                        <li className='join'>
                            Join the conversation.
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div className='card'>
                        <div className='image'>
                            <img src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="Bird" width="80px" height="80px" />
                        </div>
                        <h1>See what’s happening in</h1>
                        <h1 style={{marginBottom:"55px",marginTop:"-20px",marginLeft:"-50px"}}>the world right now</h1>
                        <h4 style={{marginLeft:"-300px"}}>Join Twitter today.</h4>
                        <button className="btn">Sign Up</button>
                        <button className="btn1">Log in</button>
                    </div>
                </div>
                <div className="bottom">
                    <ul>
                        <li>
                            <a href='https://about.twitter.com/'>About</a>
                        </li>
                        <li>
                            <a href='https://help.twitter.com/'>Help Center</a>
                        </li>
                        <li>
                            <a href='https://twitter.com/tos'>Terms of Service</a>
                        </li>
                        <li>
                            <a href='https://twitter.com/privacy'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href='https://support.twitter.com/articles/20170514'>Cookie Policy</a>
                        </li>
                        <li>
                            <a href='https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html'>Ads info</a>
                        </li>
                        <li>
                            <a href='https://blog.twitter.com/'>Blog</a>
                        </li>
                        <li>
                            <a href='https://status.twitterstat.us/'>Status</a>
                        </li>
                        <li>
                            <a href='https://careers.twitter.com/'>Careers</a>
                        </li>
                        <li>
                            <a href='https://about.twitter.com/press/brand-assets'>Brand Resources</a>
                        </li>
                        <li>
                            <a href='https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise'>Advertising</a>
                        </li>
                        <li>
                            <a href='https://marketing.twitter.com/'>Marketing</a>
                        </li>
                        <li>
                            <a href='https://business.twitter.com/'>Twitter for Business</a>
                        </li>
                        <li>
                            <a href='https://developer.twitter.com/'>Developers</a>
                        </li>
                        <li>
                            <a href='https://twitter.com/i/directory/profiles'>Directory</a>
                        </li>
                        <li>
                            <a href='https://twitter.com/settings'>Settings</a>
                        </li>
                        <br/>
                        <li>
                            © 2021 Twitter, Inc.
                        </li>

                    </ul>

                </div>

            </div>
        );
    }
}


export default Home
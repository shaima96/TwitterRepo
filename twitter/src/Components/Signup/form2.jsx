import React from 'react';
import './Signup.css'
import { Button } from '@material-ui/core'


class FormTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='container_form2'>
                <div className='form2_button'>
                    <a href="javascript:history.go(-1)">
                        <img  id='back'src='https://www.flaticon.com/svg/vstatic/svg/786/786399.svg?token=exp=1611349384~hmac=aeb9533bff962d5f72fc04add3e38f6a' width='50px' height='50px' />
                    </a>
                    <img  id='twitter'src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="Bird" width="70px" height="70px" />
                    <Button type='submit' className='button' > Next</Button>
                </div>
                <div className='div_form2'>
                    <h2>Customize your experience</h2>
                    <h3>Track where you see Twitter content across the web</h3>
                    <p>Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.
                       <br />
                        <br />
                        <h4>For more details about these settings, visit the <a href='https://help.twitter.com/en/managing-your-account/new-account-settings' target='_blank'>Help Center.</a></h4>
                    </p>
                </div>
            </div>

        )
    }
}

export default FormTwo
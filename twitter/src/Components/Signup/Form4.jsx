import React from 'react';
import './Signup.css'
import { TextField,Button} from '@material-ui/core'
import { Link } from 'react-router-dom'


class FormFour extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='container_form4'>
                <div className='form4_button'>
                    <a href="javascript:history.go(-1)">
                        <img  id='back'src='https://i.imgur.com/5ZC472g.png' width='40px' height='40px' />
                    </a>
                    <img  id='twitter'src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="Bird" width="60px" height="60px" />
                    <Link  to='/form5' style={{ textDecoration: 'none' }}>
                    <Button type='submit' className='button' > Next</Button>
                    </Link>                </div>
                    <br/>
                <div className='div_form4'>
                    <h2>We sent you a code</h2>
                    <br/>
                    <h3>Enter it below to verify shaimaazmi96@gmail.com.</h3>
                    <br/>
                    <TextField className='Input'
                            label='Verfication code'
                            type='number'
                            name='number'
                            variant="outlined"
                        />
                        <h4>Didn't receive email?</h4>
                </div>
            </div>

        )
    }
}

export default FormFour
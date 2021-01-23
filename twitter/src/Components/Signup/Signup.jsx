import React from 'react';
import './Signup.css'
import { Button, TextField } from '@material-ui/core'
import Date from './Date'
import { Link } from 'react-router-dom'



class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            dateOfBirth: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    render() {

        const { name, email, dateOfBirth } = this.state
        return (
            <div className='container_signup'>
                <div className='div_button'>
                    <img src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="Bird" width="70px" height="70px" />
                    <Link  to='/form2' style={{ textDecoration: 'none' }}>
                    <Button type='submit' className='button' > Next</Button>
                    </Link>
                </div>
                <div className='div_form'>
                    <h2>Create your account</h2>
                    <form className='signup' >
                        <TextField className='Input'
                            label='name'
                            type='text'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                            variant="outlined"
                            required
                        />
                        <br />
                        <br />
                        <TextField className='Input'
                            label='Email'
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            variant="outlined"
                            required
                        />
                        <h5>Use phone instead</h5>
                        <h4>Date of Birth</h4>
                        <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                        <Date onChange={this.handleChange} value={dateOfBirth} />
                    </form>
                </div>
            </div>

        )
    }
}

export default Signup
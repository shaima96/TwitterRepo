import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    render() {
        const { email, password } = this.state
        return (
            <div className='container_login'>
                <img src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="Bird" width="80px" height="80px" />
                <br />
                <h1>Log in to Twitter</h1>
                <br />

                <form className='login' >
                    <TextField className='Input'
                        placeholder='Phone,Email,or username'
                        label='Phone,Email or username'
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                        variant="outlined"
                    />
                    <br />
                    <br />
                    <TextField className='Input'
                        placeholder='Password'
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                        variant="outlined"
                        label='Password'
                    />
                    <br />
                    <br />
                    <Button type='submit' className='button' > Log in </Button>
                    <br />
                    <Link to='/forget' style={{ textDecoration: 'none' }}>
                    <h4 id='password'>Forgot password?</h4>
                    </Link>
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <h4 id='signup'>Sign up for Twitter</h4>
                    </Link>
                </form>

            </div>

        )
    }
}


export default Login
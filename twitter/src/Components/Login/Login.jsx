import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Login.css'



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            redirect: false,
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({ [name]: value })
    }

    signInCheck = (e) => {
        var role = new FormData()
        role.append("username", this.state.email)
        role.append("password", this.state.password)
        fetch("https://cors-anywhere.herokuapp.com/https://twittrer.herokuapp.com/signin", {
            method: "POST",
            body: role
        })
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                localStorage.setItem({ result })
                this.setState({redirect:true})
            })
    }
    signIn = (e) => {
        e.preventDefault()
        this.signInCheck()
    }
    render() {
        const { email, password } = this.state
        if (this.state.redirect) {
            return <Redirect to="/homepage" />
          } else {
        return (
            <div className='container_login'>
                <img src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="Bird" width="50px" height="50px" />
                <br />
                <h1>Log in to Twitter</h1>
                <br />

                <form className='login' onSubmit={this.signIn} >
                    <TextField className='Input' 
                        placeholder='Phone,Email,or username'
                        label='Phone,Email or username'
                        type='text'
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
                    <Link to='/homepage' style={{ textDecoration: 'none' }}>
                    <Button type='submit' className='button' > Log in </Button>
                    </Link>
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
}

export default Login;
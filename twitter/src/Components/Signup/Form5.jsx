import { TextField,Button} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import React from 'react';
import './Signup.css';


class FormFive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password:"",
            error: "",
            redirect: false,
        }
    }


    register = (e) => {
        var row=new FormData()
          row.append("username", this.props.username2)
          row.append("password",this.state.password)
          row.append("email",this.props.email2)
          row.append("dob",this.props.day2+" / "+this.props.month2+" / "+this.props.year2)
        fetch("https://cors-anywhere.herokuapp.com/https://twittrer.herokuapp.com/signup", {
          method: "POST",          
          body: row,
        })
          .then((response) => response.text())
          .then((result) => {
              localStorage.setState({redirect:true})
        })
    }

    reveal = (e) => {
        var x = document.getElementById("signuppassword");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }
    checkLength = (e) => {
        if(e.target.value.length<8){this.setState({ error: "Please enter a valid email." })}
        else{this.setState({ error: "" });document.getElementById("signupbutton").style.visibility="visible"}
    }

    render() {
      if (this.state.redirect) {
        return <Redirect to="/login" />
      } else {
        return (
            <div className='container_image'>
            <div className='container_form5'>
                <div className='form5_button' >
                    <img  id='twitter'src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image" alt="Bird" width="60px" height="60px" />
                    <Link  to='/login' style={{ textDecoration: 'none' }}>
                    <Button type='submit' className='button' onClick={this.register} id="signupbutton" style={{visibility: "hidden"}}> Next</Button>
                    </Link>                </div>
                    <br/>
                <div className='div_form5'>
                    <h2>You'll need a password</h2>
                    <br/>
                    <h3>Make sure it’s 8 characters or more.</h3>
                    <br/>
                    <TextField className='Input'
                            label='Password'
                            type='password'
                            name='password'
                            id='signuppassword'
                            onChange={(e)=>{this.checkLength(e);this.setState({password:[e.target.value]})}}
                            variant="outlined"
                            error={!!this.state.error}
                            helperText={this.state.error}
                            required
                        />
                        <h4 onClick={this.reveal} style={{cursor:"pointer"}}>Reveal password</h4>
                </div>
            </div>
            </div>

        )
      }
    }
}

// Redux
const mapStateToProps = (state) => {
    return {
      day2: state.day2,
      month2: state.month2,
      year2: state.year2,
      email2: state.email2,
      username2: state.username2,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
  
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(FormFive);
  
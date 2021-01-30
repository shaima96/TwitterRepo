import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { username,email } from "../../redux/actions";
import { connect } from "react-redux";
import React from "react";
import Date from "./Date";
import "./Signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      error2: "",
      redirect: false,
    };
  }

  checkuser = (e) => {
    var row=new FormData()
    row.append('username', e.target.value)
       fetch("https://cors-anywhere.herokuapp.com/https://twittrer.herokuapp.com/user", {
          method: "POST",
          body: row, 
        })
          .then((response) => response.text())
          .then((result) => {
            if(result === "no"){
              this.setState({ error2: "Username has already been taken." })}
            else{
              this.setState({ error2: "" });this.checker()}
          })
          .catch((error) => console.error(error))
  };

  checkemail = (e) => {
    var row=new FormData()
    row.append('email', e.target.value)
    this.validateEmail(e.target.value)
      ? fetch("https://cors-anywhere.herokuapp.com/https://twittrer.herokuapp.com/email", {
          method: "POST",
          body: row, 
        })
          .then((response) => response.text())
          .then((result) => {
            if(result === "no"){
              this.setState({ error: "Email has already been taken." })}
            else{
              this.setState({ error: "" });this.checker()}
          })
          .catch((error) => console.error(error))
      : this.setState({ error: "Please enter a valid email." });
  };

 validateEmail = (email) => {
   var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
 };
 checker = (e) => {
  if(this.props.username2&&this.props.email2&&!this.state.error&&!this.state.error2){document.getElementById("signupinformation").style.visibility="visible"}
  else{document.getElementById("signupinformation").style.visibility="hidden"}
}

  render() {

    return (
      <div className="container_image">
        <div className="container_signup">
          <div className="div_button">
            <img
              src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image"
              alt="Bird"
              width="60px"
              height="60px"
            />
            <Link to="/form2" style={{ textDecoration: "none", visibility: "hidden"}} id="signupinformation">
              <Button
                type="submit"
                className="button"
              >
                {" "}
                Next
              </Button>
            </Link>
          </div>
          <div className="div_form">
            <h2>Create your account</h2>
            <form className="signup">
              <TextField
                className="Input"
                label="Username"
                type="text"
                name="username"
                onChange={(e) => {
                  this.checkuser(e);
                  this.props.username([
                    e.target.value
                  ])
                }}
                variant="outlined"
                error={!!this.state.error2}
                helperText={this.state.error2}
                required
              />
              <br />
              <br />
              <TextField
                className="Input"
                label="Email"
                type="email"
                name="email"
                onChange={(e) => {
                  this.checkemail(e);
                  this.props.email([
                    e.target.value
                  ])
                }}
                variant="outlined"
                error={!!this.state.error}
                helperText={this.state.error}
                required
              />
              <h5>Use phone instead</h5>
              <h4>Date of Birth</h4>
              <p>
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </p>
              <Date />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

// Redux
const mapStateToProps = (state) => {
  return {
    username2:state.username2,
    email2:state.email2,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    email: (x) => {
      dispatch(email(x));
    },    
    username: (x) => {
      dispatch(username(x));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

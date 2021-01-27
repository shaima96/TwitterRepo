import { Button, TextField } from "@material-ui/core";
import { signup } from "../../redux/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import Date from "./Date";
import "./Signup.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      username:"",
      email:"",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.signup([
      this.state.username,
      this.state.email,
    ])
  };

  checkemail = (e) => {
    this.validateEmail(e.target.value)
      ? fetch("https://twittrer.herokuapp.com/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: e.target.value,
        })
          .then((response) => response.json())
          .then((result) => {
            result === "no"
              ? this.setState({ error: "Email has already been taken." })
              : this.setState({ error: "" });
          })
          .catch((error) => console.error(error))
      : this.setState({ error: "Please enter a valid email." });
  };

  validateEmail = (email) => {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

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
            <Link to="/form2" style={{ textDecoration: "none" }}>
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
                  this.handleChange(e);
                }}
                variant="outlined"
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
                  this.handleChange(e);
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
    signup2: state.signup2,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (x) => {
      dispatch(signup(x));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

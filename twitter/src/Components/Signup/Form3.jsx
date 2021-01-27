import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import "./Signup.css";

class FormThree extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div className="container_image">
      <div className="container_form3">
        <div className="form3_button">
        <Link to="/form2" style={{ textDecoration: "none" }}>
            <img
              id="back"
              src="https://i.imgur.com/5ZC472g.png"
              width="40px"
              height="40px"
              />
        </Link>
          <h4>Step 3 of 5</h4>
        </div>
        <br />
        <div className="div_form3">
          <h2>Create your account</h2>
          <br />
          <form className="signup">
            <TextField
              className="Input"
              label="Name"
              type="text"
              name="name"
              value={this.props.username2?this.props.username2:""}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            />
            <br />
            <br />
            <TextField
              className="Input"
              label="Email"
              type="email"
              name="email"
              value={this.props.email2?this.props.email2:""}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            />
            <br />
            <br />
            <TextField
              className="Input"
              label="Birth date"
              type="text"
              name="text"
              value={this.props.day2?this.props.day2+" / "+this.props.month2+" / "+this.props.year2:""}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            />
            <br />
            <br />
            <p>
              By signing up, you agree to the{" "}
              <a href="https://twitter.com/en/tos#new" target="_blank">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="https://twitter.com/en/privacy" target="_blank">
                Privacy Policy
              </a>
              , including
              <a
                href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
                target="_blank"
              >
                Cookie Use.
              </a>
              <br /> Others will be able to find you by email or phone number
              when provided · Privacy Options
            </p>
            <Link to="/form4" style={{ textDecoration: "none" }}>
              <Button type="submit" className="button">
                {" "}
                Sign up{" "}
              </Button>
            </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(FormThree);

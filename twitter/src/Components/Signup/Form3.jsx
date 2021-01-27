import { Button, TextField } from "@material-ui/core";
import { signup,date } from "../../redux/actions";
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
    console.log(this.props.date2)
    return (
      <div className="container_form3">
        <div className="form3_button">
          <a href="javascript:history.go(-1)">
            <img
              id="back"
              src="https://i.imgur.com/5ZC472g.png"
              width="40px"
              height="40px"
            />
          </a>
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
              value={this.props.signup2?this.props.signup2[0]:""}
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
              value={this.props.signup2?this.props.signup2[1]:""}
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
              value={this.props.date2?this.props.date2[0]+" / "+this.props.date2[1]+" / "+this.props.date2[2]:""}
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
    );
  }
}

// Redux
const mapStateToProps = (state) => {
  return {
    signup2: state.signup2,
    date2: state.data2,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (x) => {
      dispatch(signup(x));
    },
    date: (x) => {
      dispatch(date(x));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormThree);

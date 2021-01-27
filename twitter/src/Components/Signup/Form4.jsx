import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import "./Signup.css";

class FormFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container_form4">
        <div className="form4_button">
          <a href="javascript:history.go(-1)">
            <img
              id="back"
              src="https://i.imgur.com/5ZC472g.png"
              width="40px"
              height="40px"
            />
          </a>
          <img
            id="twitter"
            src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image"
            alt="Bird"
            width="60px"
            height="60px"
          />
          <Link to="/form5" style={{ textDecoration: "none" }}>
            <Button type="submit" className="button">
              {" "}
              Skip
            </Button>
          </Link>{" "}
        </div>
        <br />
        <div className="div_form4">
          <h2>We sent you a code</h2>
          <br />
          <h3>Enter it below to verify {this.props.email2}</h3>
          <br />
          <TextField
            className="Input"
            label="Verfication code"
            type="number"
            name="number"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
          <h4>Didn't receive email?</h4>
        </div>
      </div>
    );
  }
}

// Redux
const mapStateToProps = (state) => {
  return {
    email2:state.email2,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {


  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFour);

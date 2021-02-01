import React from "react";
import "./Signup.css";
import { Button, TextField } from "@material-ui/core";

class Forget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container_forget">
        <div className="detail">
          <img
            src="https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image"
            alt="Bird"
            width="50px"
            height="50px"
          />
          <h4>Password Reset</h4>
        </div>
        <div className="details">
          <h1>Find your Twitter account</h1>
          <br />
          <h3>Enter your email, phone number, or username.</h3>
          <br />
          <TextField
            className="search_input"
            type="text"
            name="phonenumber"
            variant="outlined"
          />
          <br />
          <br />
          <Button type="submit" className="search">
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default Forget;

import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Profilepage from "./Components/Profile/Profilepage";
import Homepage from "./Components/HomePage/Homepage";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Forget from "./Components/Signup/ForgetPage";
import FormTwo from "./Components/Signup/form2";
import FormThree from "./Components/Signup/Form3";
import FormFour from "./Components/Signup/Form4";
import FormFive from "./Components/Signup/Form5";
import Explore from "../src/Components/HomePage/Explore";
import Bookmarks from "../src/Components/HomePage/Bookmarks";
import { React, Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/profile" component={Profilepage} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forget" component={Forget} />
          <Route exact path="/form2" component={FormTwo} />
          <Route exact path="/form3" component={FormThree} />
          <Route exact path="/form4" component={FormFour} />
          <Route exact path="/form5" component={FormFive} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/bookmarks" component={Bookmarks} />
        </Switch>
      </div>
    );
  }
}

export default App;

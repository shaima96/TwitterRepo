import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home  from '../src/Components/Home/Home'
import Signup from '../src/Components/Signup/Signup'
import Login from '../src/Components/Login/Login'
import Forget from '../src/Components/Signup/ForgetPage'
import FormTwo from './Components/Signup/form2'
import FormThree from '../src/Components/Signup/Form3'



function App() {
  return (
    <div className="app">
      <Switch>
          <Route exact path='/'  component={Home} />
          <Route exact path='/signup'  component={Signup} />
          <Route exact path='/login'  component={Login} />
          <Route exact path='/forget'  component={Forget} />
          <Route exact path='/form2'  component={FormTwo} />
          <Route exact path='/form3'  component={FormThree} />

        </Switch>
    </div>
  );
}

export default App;

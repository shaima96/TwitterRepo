import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home  from '../src/Components/Home/Home'
import Homepage from './Components/HomePage/Homepage';
import Profilepage from './Components/Profile/Profilepage';



function App() {
  return (
    <div className="app">
      <Switch>
      <Route exact path='/'  component={Home} />
      <Route exact path='/homepage'  component={Homepage} />
      <Route exact path='/profile'  component={Profilepage} />

        </Switch>
    </div>
  );
}

export default App;

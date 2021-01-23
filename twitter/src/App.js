import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home  from '../src/Components/Home/Home'
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="app">
      <Switch>
      <Route exact path='/'  component={Home} />
      <Route exact path='/homepage'  component={Homepage} />
        </Switch>
    </div>
  );
}

export default App;

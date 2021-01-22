import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home  from '../src/Components/Home/Home'
import Sidebar from './Components/Sidebar/Sidebar'


function App() {
  return (
    <div className="app">
      <Sidebar/>
     
      {/* <Switch>
          <Route exact path='/'  component={Home} />
        </Switch> */}
    </div>
  );
}

export default App;

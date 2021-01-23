import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home  from '../src/Components/Home/Home'
import Sidebar from './Components/Sidebar/Sidebar'
import Feed from './Components/Feed/Feed';


function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
     
      {/* <Switch>
          <Route exact path='/'  component={Home} />
        </Switch> */}
    </div>
  );
}

export default App;

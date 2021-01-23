import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home  from '../src/Components/Home/Home'
import Feed from './Components/Feed/Feed';
import Widgets from './Components/Widgets/Widgets'
import Sidebar from './Components/Sidebar/Sidebar';
import Homepage from './Components/Homepage';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
      <Widgets/>
      {/* <Homepage/> */}
     
      {/* <Switch>
          <Route exact path='/'  component={Home} />
        </Switch> */}
    </div>
  );
}

export default App;

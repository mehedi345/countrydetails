import React  from 'react';

import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Countrydetail from './components/Countrydetail/Countrydetail';

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/home">
           <Home />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path ="/country/:name">
          <Countrydetail></Countrydetail>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;

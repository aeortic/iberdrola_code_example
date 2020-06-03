import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/track">
          <div>details</div>
        </Route>
        <Route path="/">
          <div>track list</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TrackListPage from './components/TrackListRoute/TrackListPage';
import TrackDetailsPage from './components/TrackDetailsRoute/TrackDetailsPage';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/track">
          <TrackDetailsPage />
        </Route>
        <Route path="/">
          <TrackListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

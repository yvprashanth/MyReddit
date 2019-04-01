import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage';

class App extends Component {  
  buttonClickAction = (event) => {
  }
  
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={() => (
            <HomePage />
          )} />
            <pre>
              {
                JSON.stringify(this.props.simpleReducer)
              }
          </pre>
          <button onClick={this.buttonClickAction}>Test redux action</button>
        </Switch>
      </div>
    );
  }
}

export default App;



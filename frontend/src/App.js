import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage';


class App extends Component {  
  buttonClickAction = (event) => {
    this.props.testInsideDispatch();
  }
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <HomePage />
        )} />
        <pre>
            {
              JSON.stringify(this.props.simpleReducer)
            }
        </pre>
        <button onClick={this.buttonClickAction}>Test redux action</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  testInsideDispatch: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);



import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';


class App extends Component {  
  buttonClickAction = (event) => {
    this.props.testInsideDispatch();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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



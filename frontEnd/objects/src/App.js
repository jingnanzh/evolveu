import React, { Component } from 'react'
import logo from './logo.svg'
import Icons from './components/Icons.js'
import Invision from './Invision'
import './App.css'



class App extends Component {


   
  render() { 
    return (
      <div className="App">
        <header className="App-header">
         
          <Invision />              
          <Icons />        
          <img src={logo} className="App-logo" alt="logo" /> 
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
            
      </div>
    );
  }
}

export default App;

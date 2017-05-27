import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Serch from './components/serch/Serch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppBar} from 'material-ui/AppBar';

class App extends Component {
  constructor(){
    super();

    this.state = {

      nombre:"Serch",
    }
  }
  
  onChange = (e) => {
    const valor = e.target.value
    this.setState({
      nombre:valor
    });
  }
  render() {
    return (
    <div>

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {this.state.nombre} Hommies</h2>
        </div>
        <p className="App-intro">
          <Serch nombre={this.state.nombre} />
        </p>
        <input
        onChange={this.onChange}
         type="text" placeholder="ponlo aqui" />
        <button
        onClick={this.cambiar}
        >Cick</button>
      </div>
    </div>
    );
  }
}

export default App;

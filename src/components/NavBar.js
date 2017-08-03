import React, {Component} from 'react';
import '../styles/App.css';
import logo from '../logo.svg';
import '../styles/NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row navbar">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="display-5">Play What?!</h1>
        </div>
      </div>
    );
  }
}

export default NavBar;

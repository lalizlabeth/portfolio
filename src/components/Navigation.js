import React, { Component } from 'react';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation col-2">
        <a className="active" href="">Home</a>
        <a href="">About</a>
        <a href="">Design</a>
        <a href="">Illustration</a>
        <a href="">Experiments</a>
        <a href="">Teaching</a>
      </nav>
    );
  }
}

export default Navigation

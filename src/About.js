import React, { Component } from 'react';
import './Home.scss';
import Navigation from './components/Navigation';
import Sparkle from './components/Sparkle';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends Component {
  render() {

      console.log("match",  this.props.match);
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <h1 className="header-text col-4"><strong>Elizabeth Lin</strong> is a product designer &amp; aspiring princess.</h1>
          <div className="col-4 offset-neg-1">
            <div className="header-image">
              <Sparkle />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default About;

import React, { Component } from 'react';
import './Home.scss';
import Navigation from './components/Navigation';
import Sparkle from './components/Sparkle';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
          <header className="header">
            <h1 className="header-text col-4"><strong>Elizabeth Lin</strong> is a product designer &amp; aspiring princess.</h1>
            <div className="header-image col-4">
              <Sparkle />
            </div>
          </header>
        <section className="projects-wrapper">
          <ul className="projects col-10">

            <li className="project col-4" id="project-1">
              <div className="project-number col-1">
                <h3>01</h3>
              </div>
              <div className="col-3" style={{paddingLeft: "0.5vw"}}>
                <div className="image"></div>
                <h6 className="active">Khan Academy</h6>
                <h2>Defining student progress</h2>
                <p>How can we help teachers to identify and fill student gaps in learning?</p>
              </div>
            </li>

            <li className="project col-4" id="project-2">
              <div className="project-number">
                <h3>02</h3>
              </div>
              <div className="col-4" style={{padding: "0"}}>
                <div className="image"></div>
                <h6 className="active">Khan Academy</h6>
                <h2>Math review game</h2>
                <p>How can we help teachers to identify and fill student gaps in learning?</p>
              </div>
            </li>

          </ul>
        </section>
      </div>
    );
  }
}

export default Home;

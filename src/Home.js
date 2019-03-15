import React, { Component } from 'react';
import './Home.scss';
import Navigation from './components/Navigation';
import Sparkle from './components/Sparkle';
import About from './About';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
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

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">

            <li className="project col-4 nested" id="project-1">
              <Link className="project-link" to="/design/project/student-progress/">
                <div className="project-number col-1">
                  <h3>01</h3>
                </div>
                <div className="col-3">
                  <div className="image" style={{backgroundImage: "url(images/thumbs/thumb-student-progress.png)"}}></div>
                  <h6 className="active">Khan Academy</h6>
                  <h2>Defining student progress</h2>
                  <p>How can we help teachers to identify and fill student gaps in learning?</p>
                </div>
              </Link>
            </li>

            <li className="project col-4 nested" id="project-2" to="/design/project/review-game/">
              <Link className="project-link" to="/design/project/review-game/" style={{display:"block"}}>
                <div className="project-number col-4">
                  <h3>02</h3>
                </div>
                <div className="col-4">
                  <div className="image" style={{backgroundImage: ""}}></div>
                  <h6 className="active">Khan Academy</h6>
                  <h2>Math review game</h2>
                  <p>How can we help teachers to identify and fill student gaps in learning?</p>
                </div>
              </Link>
            </li>

            <li className="project col-4 nested" id="project-3">
              <Link className="project-link" to="/design/project/beauty/">
                <div className="project-number col-1">
                  <h3>03</h3>
                </div>
                <div className="col-4">
                  <div className="image" style={{backgroundImage: "url(images/thumbs/thumb-beautiful.jpg)"}}></div>
                  <h6 className="active">SFPC</h6>
                  <h2>What do we perceive as beautiful?</h2>
                  <p>My final showcase project at the School for Poetic Computation</p>
                </div>
              </Link>
            </li>

          </ul>
        </section>
      </div>
    );
  }
}

export default Home;

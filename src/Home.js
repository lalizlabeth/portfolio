import React, { Component } from 'react';
import './Home.scss';
import Navigation from './components/Navigation';
import Sparkle from './components/Sparkle';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <Navigation />
          <div className="header column-10">
            <h1 className="header-text column-4"><strong>Elizabeth Lin</strong> is a product designer &amp; aspiring princess.</h1>
            <div className="header-image column-5">
              <Sparkle />
            </div>
          </div>
        </div>
        <section className="wrapper projects-wrapper">
          <ul className="projects">
            <li className="project project-1 column-4">
              <div className="project-number">
                <h3>01</h3>
              </div>
              <div>
                <div className="image"></div>
                <h2>Defining student progress</h2>
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

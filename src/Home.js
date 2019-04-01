import React, { Component } from 'react';
import './Home.scss';
import Sparkle from './components/Sparkle';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <header className="header" style={{ padding: "48px 0" }}>
          <h1 className="header-text"><strong><span role="img" aria-label="crown">👑</span> Elizabeth Lin</strong> is a product designer &amp; aspiring princess.</h1>
          <div className="header-image-wrapper">
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
                  <img className="project-thumb" alt="Student progress thumbnail" src="images/thumbs/thumb-student-progress.png" />
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
                  <img className="project-thumb" alt="Review game thumbnail" src="images/thumbs/thumb-review-game.png" />
                  <h6 className="active">Khan Academy</h6>
                  <h2>Math review game</h2>
                  <p>How can we help teachers to identify and fill student gaps in learning?</p>
                </div>
              </Link>
            </li>

            <li className="project col-3 offset-2 nested" id="project-3">
              <Link className="project-link" to="/design/project/beauty/">
                <div className="project-number col-4">
                  <h3>03</h3>
                </div>
                <div className="col-3">
                  <img className="project-thumb" alt="What is beauty thumbnail" src="images/thumbs/thumb-beautiful.jpg" />
                  <h6 className="active">SFPC</h6>
                  <h2>What do we perceive as beautiful?</h2>
                  <p>My final showcase project at the School for Poetic Computation</p>
                </div>
              </Link>
            </li>

           <li className="project col-4 nested" id="project-4">
            <Link className="project-link" to="/design/project/fashion-avgs/">
              <div className="project-number col-2">
                <h3>04</h3>
                <h6 className="active">Experiments</h6>
                <h2>Fashion averages</h2>
                <p>What's the average of fashion week?</p>
              </div>
              <div className="col-2">
                  <img className="project-thumb" alt="fashion experiments thumbnail" src="images/thumbs/thumb-fashion-avgs.jpg" />
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

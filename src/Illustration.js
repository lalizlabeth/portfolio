import React, { Component } from 'react';
import './Subpage.scss';
import './Illustration.scss';
import Sparkle from './components/Sparkle';
import { Link } from "react-router-dom";

class Illustration extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <div className="col-7">
            <div className="header-image illustration">
              <Sparkle />
            </div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="projects col-10 offset-2 nested">

            <li className="project col-4 nested" id="project-1">
              <Link className="project-link" to="/illustrations/project/cultural-values/">
                <div className="project-number col-1">
                  <h3>01</h3>
                </div>
                <div className="col-3">
                  <img className="project-thumb" alt="Cultural values thumbnail" src="images/thumbs/thumb-cultural-values.png" />
                  <h6 className="active">Illustrations</h6>
                  <h2>Cultural values</h2>
                  <p>Illustrations for our new values!</p>
                </div>
              </Link>
            </li>

            <li className="project col-4 nested" id="project-1">
              <Link className="project-link" to="/illustrations/project/hogwarts/">
                <div className="project-number col-1">
                  <h3>02</h3>
                </div>
                <div className="col-3">
                  <img className="project-thumb" alt="Hogwarts houses" src="images/thumbs/thumb-hogwarts.gif" />
                  <h6 className="active">Illustrations</h6>
                  <h2>Harry Potter Hackweek</h2>
                  <p>Illustrations for our yearly Harry Potter hackathon.</p>
                </div>
              </Link>
            </li>

          </ul>
        </section>

      </div>
    );
  }
}

export default Illustration;

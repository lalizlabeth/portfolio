import React, { Component } from 'react';
import './About.scss';
import Navigation from './components/Navigation';
import Sparkle from './components/Sparkle';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <div className="col-7">
            <div className="header-image about">
              <Sparkle />
            </div>
          </div>
        </header>

        <section className="projects-wrapper">
          <ul className="about-modules col-8 offset-2 nested">
            <div className="about-group">
              <li className="bio-text col-6 offset-1">
                <h1>👋🏼 I'm currently a product designer at <a href="https://www.khanacademy.org"><strong>Khan Academy</strong></a>. Chat with me about:</h1>
              </li>

              <ul className="social-media col-1">
                <li><a className="social-media-link">Resume</a></li>
                <li><a className="social-media-link">Email</a></li>
                <li><a className="social-media-link">LinkedIn</a></li>
                <li><a className="social-media-link">Twitter</a></li>
                <li><a className="social-media-link">Dribbble</a></li>
              </ul>
            </div>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2>👠</h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Anything fashion-related</span></h2>
                <p>I love everything fashion from history to styling, and especially Alexander McQueen. My latest mission is learning how to sew.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2>🏫</h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Teaching design</span></h2>
                <p>I'm passionate about design education and mentorship. Reach out to me if you're looking for someone to teach a workshop or give a talk!</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2>🎵</h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Classifying music</span></h2>
                <p>I've been separating my playlists into bops, bangers, &amp; jams. Lately, I've been listening to Solange &amp; Ari.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2>📚</h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Books</span></h2>
                <p>My favorite book recently was the Fifth Season by N.K. Jemisin!</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2>🐦</h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Folding paper</span></h2>
                <p>I've been making my way through a bunch of origami books with the goal of eventually combining origami with fashion (like Issey Miyake!) </p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2>🎷</h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Playing classical saxophone</span></h2>
                <p>Something about sax here.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2>🎈</h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Planning events</span></h2>
                <p>Something about events here.</p>
              </div>
            </li>

            <li className="about-module col-6 nested">
              <div className="project-number col-1">
                <h2>💻</h2>
              </div>
              <div className="col-5">
                <h2><span className="about-module-text">Making things at SFPC</span></h2>
                <p>Something about sfpc here.</p>
              </div>
            </li>
        </ul>

        </section>

      </div>
    );
  }
}

export default About;

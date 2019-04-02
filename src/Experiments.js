import React, { Component } from 'react';
import './Experiments.scss';
import Sparkle from './components/Sparkle';

class Experiments extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <div className="col-7">
            <div className="header-image experiments">
            </div>
          </div>
        </header>

        <section className="projects-wrapper">
        </section>

      </div>
    );
  }
}

export default Experiments;

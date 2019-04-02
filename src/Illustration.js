import React, { Component } from 'react';
import './Illustration.scss';
import Sparkle from './components/Sparkle';

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
        </section>

      </div>
    );
  }
}

export default Illustration;

import React, { Component } from 'react';
import './Teaching.scss';
import Sparkle from './components/Sparkle';

class Teaching extends Component {
  render() {
    return (
      <div>
        <header className="header col-9 offset-3 nested" style={{padding: "2vw 0"}}>
          <div className="col-7">
            <div className="header-image teaching">
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

export default Teaching;

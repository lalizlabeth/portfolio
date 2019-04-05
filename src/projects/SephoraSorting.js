import React, { Component } from 'react';

class SephoraSorting extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">This is an experimental project I did during my time at the <a href="http://sfpc.io">School for Poetic Computation</a> in 2018.</p>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">For this project, we were tasked with scraping a really large list of things. I decided to scrape Sephora's foundation section and sort them in different ways. I used Python for both the scraping and image creation.</p>
          <p className="reflections col-2">Notes here</p>
        </div>
    </section>
    );
  }
}

export default SephoraSorting;

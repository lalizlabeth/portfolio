import React, { Component } from 'react';

class StudentProgress extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">This is an experimental project I did at the School for Poetic Computation. I hope to build on this idea more in the future.</p>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">We learned about Jason Salavon's image averages in one of the classes. I wanted to apply this methodology to fashion runway images I had scraped from Vogue.com using Python. This is the average of every runway model in their Spring 2019 database generated with Open Frameworks:</p>
          <p className="reflections col-2">My notes and reflections about the project will go here!</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Average model of fashion week" src={require("../assets/images/fashion-avgs/spring-2019-all.jpg")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Over the last couple years, the fashion industry has treated diversity and inclusion as a trend. Based on this image alone, it looks like the average of fashion hasn't actually changed. I applied the same approach to individual designers. Designers of color like Luar, Pyer Moss, and Telfar tended to have a darker-skinned average. Note that these brands also have unisex shows:</p>
          <p className="reflections col-2">My notes and reflections about the project will go here!</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Pyer Moss" src={require("../assets/images/fashion-avgs/pyer-moss.jpg")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Telfar" src={require("../assets/images/fashion-avgs/telfar.jpg")}/>
        </div>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">Chromat, a swimwear brand, known for creating garments for all body types also breaks apart from the generic body shape in their averages:</p>
          <p className="reflections col-2">My notes and reflections about the project will go here!</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Telfar" src={require("../assets/images/fashion-avgs/chromat.jpg")}/>
        </div>


    </section>
    );
  }
}

export default StudentProgress;

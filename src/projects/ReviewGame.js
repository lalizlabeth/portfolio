import React, { Component } from 'react';

class ReviewGame extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph col-5">An engineer, user researcher, product manager, and I had the opportunity to research the classroom space and prototype how Khan Academy might fit into a teacher's workflow! This project spanned around 4 months from user research to concept testing.</p>
          <p className="reflections col-2">This is my favorite project from my time at KA! Sadly, it never got realized because of shifted company priorities.</p>
        </div>

        <h2 className="large-spacer-top col-5">Research</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">Going into the user research study, our hypothesis was that teachers want a homework replacement. We spoke to 13 mainstream math teachers in the US about their day-to-day challenges. We sought out teachers who didn't routinely use technology in their classrooms.</p>

        <p className="large-paragraph medium-spacer-bottom col-5">We learned a lot! At a high level, we discovered that teachers didn't find assigning homework challenging, but that keeping student engaged and knowing where they are is tough!</p>

        <p className="large-paragraph medium-spacer-bottom col-5">We also created some design principles to guide our thinking for the rest of the project:</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Old teacher dashboard" src={require("../assets/images/review-game/teachers-rule-together.png")}/>
        </div>
      </section>
    );
  }
}

export default ReviewGame;

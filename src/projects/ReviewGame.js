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

        <p className="large-paragraph medium-spacer-bottom col-5">We learned a lot! These are some illustrations our user research lead, Maureen, created to capture our learnings.</p>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="User research illustration" src={require("../assets/images/review-game/user-research-1.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="User research illustration" src={require("../assets/images/review-game/user-research-2.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">At a high level, we discovered that teachers didn't find assigning homework challenging, but that keeping student engaged and knowing where they are is tough.</p>

        <p className="large-paragraph medium-spacer-bottom col-5">We also created some design principles to guide our thinking for the rest of the project:</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Teacher design principles" src={require("../assets/images/review-game/teachers-rule-together.png")}/>
        </div>

        <h2 className="large-spacer-top col-5">Brainstorming</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">We created How Might We (HMW) questions and invited the rest of the company to generate ideas with us! Some of these questions included:</p>

        <ul className="text-list medium-spacer-bottom col-5">
          <li>HMW make students feel joyful filling their own gaps for classrooms with no access to tech?</li>
          <li>HMW make a fun diagnostic for teachers who know tech is a classroom management issues?</li>
          <li>HMW make diagnostics feel useful on a routine basis for teachers on autopilot?</li>
        </ul>

        <p className="large-paragraph medium-spacer-bottom col-5">At the same time, we looked at existing classroom products that teachers loved! We realized that in-class review games like Kahoot!, QuizletLive, and Socrative had high rates of growth.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Review game competitors" src={require("../assets/images/review-game/competitors.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Through ideation & competitive analysis, we narrowed our question to: <strong>How might we create an engaging in-class math review game?</strong> For the following couple months, we used this question to guide our prototoype.</p>

        <h2 className="large-spacer-top col-5">Game loop</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">First, we sketched out the core game loop.</p>

        <div className="col-7 medium-spacer-bottom">
          <img className="project-image" alt="Storyboard" src={require("../assets/images/review-game/coreloop.png")}/>
        </div>

        <h2 className="large-spacer-top col-5">Storyboarding</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">Then, we drew out the general flow of the game and how it would fit into the classroom.</p>

        <div className="text-group">
          <div className="col-5 medium-spacer-bottom">
            <img className="project-image" alt="Storyboard" src={require("../assets/images/review-game/flow-01.png")}/>
          </div>
          <p className="reflections col-2">A. Ms. Frizzle is planning the lesson for tomorrow and sees that it's almost time for the Unit 2 test. She decides to use Khan Academy for the review session.</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Storyboard" src={require("../assets/images/review-game/flow-02.png")}/>
          <p className="reflections col-2">B.</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Storyboard" src={require("../assets/images/review-game/flow-03.png")}/>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Storyboard" src={require("../assets/images/review-game/flow-04.png")}/>
        </div>

      </section>
    );
  }
}

export default ReviewGame;

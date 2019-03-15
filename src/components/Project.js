import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './Project.scss';
import studentProgress from '../assets/images/thumbs/thumb-student-progress.png';

class Project extends Component {
  render() {
    return (
      <div className="col-7 offset-3 nested" style={{padding: "2vw 0"}}>
        <header className="col-7 nested">
          <img className="col-7 image project-header" src={studentProgress}></img>
          <h1 className="col-6 project-title"><strong>Defining student progress</strong></h1>
          <h2 className="col-6 project-description">How might we enable teachers to identify and fill student gaps in learning?</h2>
        </header>
        <section className="col-6">
          <p className="large-paragraph">This was a 6 month-long project where we rearchitected the Khan Academy teacher dashboard. The team consisted of myself, a product manager, and 3 engineers. We shipped the feature set in Fall 2018 for Back-to-School.</p>

          <h2>The Problem</h2>
          <p className="large-paragraph">In 2017, we introduced an assignments feature to help teachers target individualized content at their students. Teachers could assign any item of content (exercises, videos, articles, quizzes) with a due date to any group of students. There was no easy way for teachers to view individual student progress over time or find trends in their learning. Student progress also only existed for math and computer science classrooms.</p>

          <p className="large-paragraph">Our goal was to give all teachers a way to view their students’ progress that fits into their current workflow and surfaces patterns in student understanding.</p>

          <h2>Initial Explorations & Research</h2>
          <p className="large-paragraph">We had a month to explore and research different directions to display student progress. We started by interviewing 10 non-math teachers to understand how they track student progress and growth. These are some of our high level findings:</p>

          <li>Teachers want to see individual student effort. If they did poorly on an exercise, did they watch a related video or read a related article? Did they use any hints? Have they improved since last week?</li>
          <li>Teachers want to identify groups of students. Which students are ahead? Which students have gaps in learning? Many teachers pull small groups aside to do a mini-lesson during class.</li>
          <li>Humanities teachers tended to use Khan Academy more as a textbook replacement than a tool for evaluation. We have good content, but it’s difficult to evaluate critical thinking skills without support for free response questions.</li>

          <p className="large-paragraph">Most importantly, we learned that teachers all define proficiency, competency, and mastery differently and want to be able to see student data in a way that matches their own model. They want the flexibility to be able to filter data by student, date range, unit, skill level, standard, and improvement. This is an early prototype I worked on to showcase how all these might work together:</p>
        </section>
      </div>
    );
  }
}

export default Project;

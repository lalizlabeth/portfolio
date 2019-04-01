import React, { Component } from 'react';

class StudentProgress extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">This was a 6 month-long project where we rearchitected the Khan Academy teacher dashboard. The team consisted of myself, a product manager, and 3 engineers. We shipped the feature set in Fall 2018 for Back-to-School.</p>
          <p className="reflections col-2">My notes and reflections about the project will go here!</p>
        </div>

        <h2 className="col-5">The Problem</h2>

        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">In 2017, we introduced an assignments feature to help teachers target individualized content at their students. Teachers could assign any item of content (exercises, videos, articles, quizzes) with a due date to any group of students. There was no easy way for teachers to view individual student progress over time or find trends in their learning. Student progress also only existed for math and computer science classrooms.</p>
          <p className="reflections col-2">Yay! More notez!</p>
        </div>

        <div className="col-5 medium-spacer-bottom">
          <img className="project-image" alt="Old teacher dashboard" src={require("../assets/images/student-progress/old-1.png")}/>
        </div>

        <p className="large-paragraph medium-spacer-bottom col-5">Our goal was to give all teachers a way to view their students’ progress that fits into their current workflow and surfaces patterns in student understanding.</p>

        <h2 className="large-spacer-top col-5">Initial Explorations & Research</h2>
        <p className="large-paragraph medium-spacer-bottom col-5">We had a month to explore and research different directions to display student progress. We started by interviewing 10 non-math teachers to understand how they track student progress and growth. These are some of our high level findings:</p>

        <ul className="text-list medium-spacer-bottom col-5">
          <li><strong>Teachers want to see individual student effort.</strong> If they did poorly on an exercise, did they watch a related video or read a related article? Did they use any hints? Have they improved since last week?</li>
          <li><strong>Teachers want to identify groups of students.</strong> Which students are ahead? Which students have gaps in learning? Many teachers pull small groups aside to do a mini-lesson during class.</li>
          <li><strong>Humanities teachers use KA as a textbook replacement more than a tool for evaluation.</strong> We have good content, but it’s difficult to evaluate critical thinking skills without support for free response questions.</li>
        </ul>

        <p className="large-paragraph medium-spacer-bottom col-5">Most importantly, we learned that teachers all define proficiency, competency, and mastery differently and want to be able to see student data in a way that matches their own model. They want the flexibility to be able to filter data by student, date range, unit, skill level, standard, and improvement. This is an early prototype I worked on to showcase how all these might work together:</p>

        <p className="large-paragraph medium-spacer-bottom col-5">At the same time, we explored some conceptual directions. In this one, we thought it would be fun if a classroom’s progress was displayed as a garden where each student’s learning was displayed as a plant! The bottom features a interactive timeline to view change over time.</p>

        <p className="large-paragraph medium-spacer-bottom col-5">We also brought together the entire team to brainstorm different visuals and forms of displaying student progress.</p>

        <h2 className="large-spacer-top col-5">Iteration</h2>

        <p className="large-paragraph medium-spacer-bottom col-5">At this point, we pulled in the engineers and started building. We recruited an initial pilot group of 30 teachers. Each week, we sent out a survey asking teachers to reflect on the new Progress feature and conducted short interviews with 2-3 teachers to get their reflections. This is where we started:</p>
    </section>
    );
  }
}

export default StudentProgress;

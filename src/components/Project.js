import React, { Component } from 'react';
import './Project.scss';
import { Link } from "react-router-dom";

import studentProgressHeader from '../assets/images/thumbs/thumb-student-progress.png';
import reviewGameHeader from '../assets/images/thumbs/thumb-review-game.png';
import fashionAveragesHeader from '../assets/images/fashion-avgs/cover.jpg';
import culturalValuesHeader from '../assets/images/cultural-values/cover.png';

import StudentProgress from '../projects/StudentProgress';
import FashionAverages from '../projects/FashionAverages';
import CulturalValues from '../projects/CulturalValues';

class ProjectContainer extends Component {

  _getProjectName = (project) => {
    const path = this.props.match.params.id;
    return (path);
  };

  render() {
    const projectPath = this._getProjectName(this.path);
    var project

    switch (projectPath) {
      case "student-progress":
        project =
        (<Project
          title="Defining student progress"
          header={studentProgressHeader}
          description="How might we enable teachers to identify &amp; fill student gaps in learning?"
          body=<StudentProgress/>/>)
        break;
      case "review-game":
        project =
        (<Project
          title="In-class review game"
          header={reviewGameHeader}
          description="How can we help teachers identify and fill student gaps in learning?"
          body=<StudentProgress/>/>)
        break;
      case "fashion-avgs":
        project =
        (<Project
          title="Fashion averages"
          header={fashionAveragesHeader}
          description="Who is the average of fashion week?"
          body=<FashionAverages/>/>)
        break;
      case "cultural-values":
        project =
        (<Project
          title="Cultural values"
          header={culturalValuesHeader}
          description="Designing Khan Academy's new cultural values."
          body=<CulturalValues/>/>)
        break;
      default:
    }

    return (
      <div className="col-7 offset-3 nested" style={{padding: "2vw 0"}}>
        {project}
      </div>
    )
  }

}

class Project extends Component {
  render() {
    return (
      <div>
        <header className="col-7 nested">
          <div className="col-7">
            <img className="image project-header" alt={this.props.title} src={this.props.header}></img>
          </div>
          <h1 className="col-7 project-title"><strong>{this.props.title}</strong></h1>
          <h2 className="col-7 project-description">{this.props.description}</h2>
        </header>
        {this.props.body}
        <section className="col-8 nested offset-neg-1 next-shelf">
          <li className="project col-4 nested" to="/design/project/review-game/">
            <Link className="project-link" to="/design/project/review-game/">
              <div className="right-text col-1">
                <h6 className="active">Previous</h6>
              </div>
              <div className="col-3">
                <h2>Math review game</h2>
              </div>
            </Link>
          </li>
          <li className="project col-4 nested" to="/design/project/review-game/">
            <Link className="project-link" to="/design/project/review-game/">
              <div className="right-text col-3">
                <h2>Another project title</h2>
              </div>
              <div className="next-shelf-label col-1">
                <h6 className="active">Next</h6>
              </div>
            </Link>
          </li>
        </section>
      </div>
    );
  }
}

export default ProjectContainer;

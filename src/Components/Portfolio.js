import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id1 = 0;
let id2 = 0;
let id3 = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id1++} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} target="_blank" rel="noreferrer">
              <img style={{ height: "150px", width: "100%" }} alt={projects.title} src={projectImage} />
            </a>
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    const theodinprojects = this.props.data.theodinproject.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id2++} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} target="_blank" rel="noreferrer">
              <img style={{ height: "150px", width: "100%" }} alt={projects.title} src={projectImage} />
            </a>
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    const hackathonprojects = this.props.data.hackathon.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id3++} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} target="_blank" rel="noreferrer">
              <img style={{ height: "150px", width: "100%" }} alt={projects.title} src={projectImage} />
            </a>
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Learning projects from <a href="https://www.theodinproject.com/">TheOdinProject</a>.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {theodinprojects}
              </div>
            </div>
          </div>
        </Fade>
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Projects developed in hackathons</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {hackathonprojects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;

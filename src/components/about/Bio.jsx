import { Component } from "react";
// import ME from "../../assets/me-about.jpg";
import un from '../img/about.jpg';

import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";
class Bio extends Component {
  render() {
    return (
      <section id="about">
       <h6> d</h6>
       <h6>dd</h6>
       <h6> jgjjfghfjghjfdghfjghfjgn
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
       








          fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffhhhh
          tyyyy
          yeartytytyyyyyyyy
          tytytytyty
     
       </h6>
        
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
            <img src={un} alt="" className="profile-image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>299+ WorldWide</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Projects</h5>
                <small>80+ Completed Projects</small>
              </article>
            </div>
            <p>
              Hello My Name is Shukri I build interactive web application 
              i am an computer Engineering i am having an experience of about 3+ Years 
              and had a deep understanding of creating web products. 
            </p>
            <a href="#contact" className="btn btn-primarys">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Bio;

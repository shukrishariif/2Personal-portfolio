import React from "react";
import ul from './img/myimg.jpeg';

const Home = () => {
  return (
    <div className="homepage-container">
      <div className="profile-image-container">
        <img src={ul} alt="" className="profile-image" />
      </div>
      <h1>Hello, I'm Shukri Maxamed Shariif</h1>
      <p>A budding software developer passionate about web technologies.</p>
      <a href="#contact" className="btn btn-primaryy">
              Let's Talk
            </a>
    </div>
  );
};

export default Home;
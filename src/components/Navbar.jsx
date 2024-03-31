import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
         Shukri
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            
            <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">Bio</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
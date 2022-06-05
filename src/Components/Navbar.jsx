import React from "react";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img className="cq" src="./Logo.png"></img>
        </a>
        <a href="#" className="x">ABOUT US</a>
        <a href="#" className="x">PROJECTS</a>
        <a href="#" className="x">DIVERSIFICATION</a>
        <a href="#" className="x">OUR PROCESS</a>
        <a href="#" className="x">TESTIMONIALS</a>
        <a href="#" className="x">CAREERS</a>
        <a href="#" className="x">CONTACT US</a>
      </div>
    </nav>
  );
}
export default Navbar;

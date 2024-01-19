// Header.jsx
"use client"
import React, { Component } from "react";
import Headroom from "react-headroom";
import "./header.scss";

class Header extends Component {
  render() {
    return (
      <Headroom>
        <header className="header">
          <ul className="menu">
            <li>
              <a href="#corecompetencies">Core Competencies</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </header>
      </Headroom>
    );
  }
}

export default Header;

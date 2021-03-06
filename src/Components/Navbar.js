import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>
  
            <ul id="nav" className="nav" style={{fontSize: 23}}>
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
  
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
  
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
  
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
  
              {/* <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li> */}
            </ul>
          </nav>
        );
    }
};

export default Navbar;
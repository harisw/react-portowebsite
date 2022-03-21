import React, { Component } from "react";
import Fade from "react-reveal";
import TsParticle from 'react-tsparticles';

import Navbar from "./Navbar";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const header = this.props.data.header;
    const description = this.props.data.description;
    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className} style={{fontSize: 50}}></i>
          </a>
        </li>
      );
    });

    const particleOptions = {
      fpsLimit: 60,
      background: {
        color: "#0b032d"
      },
      backgroundMode: {
        enable: true
      },
      fullScreen: false,
      particles: {
        color: {
          value: ["#f67e7d", "#843b62", "#621940"]
        },
        links: {
          color: "#ffb997",
          enable: true
        },
        move: {
          enable: true,
          speed:5
        },
        size: {
          value: 5,
          random: {
            enable: true,
            minimumValue: 1
          },
          animation: {
            enable: true,
            speed: 2.5,
            minimumValue: 1
          }
        },
        opacity: {
          value: 0.8,
          random: {
            enable: true,
            minimumValue: 0.4
          }
        }
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        }
      }
    };
    return (
      <header id="home">
        {/* <ParticlesBg type="circle" bg={true} /> */}
        <Navbar />
        
        <div className="row banner" >

          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{header}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                {networks}
                {/* <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a> */}
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
        <TsParticle options={particleOptions} style={{position: 'absolute', top: 0, left: 0, zIndex: -100}}/>
      </header>
    );
  }
}

export default Header;

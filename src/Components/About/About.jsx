import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import aboutprofile from '../../assets/puskar.png'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="AboutTheme" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={aboutprofile} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm a frontend developer from Chitwan, Nepal specializing in creating user-friendly websites and bringing designs to life through code.</p>
            <p>Hi, I'm Puskar SImkhada, a frontend developer passionate about creating intuitive user interfaces. With expertise in HTML, CSS, and JavaScript, I specialize in crafting responsive web experiences. From portfolio websites to e-commerece platform, I thrive on blending creativity with technology to deliver impactful solutions. Let's collaborate and bring your ideas to life!</p>
          </div>
          <div className="about-skills">
          <div className="about-skill">
              <p>C, C++, VB.NET</p> <hr style={{width: "20%"}}/>
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{width: "50%"}}/>
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{width: "60%"}}/>
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{width: "60%"}}/>
            </div>
            <div className="about-skill">
              <p>Git & GitHub</p> <hr style={{width: "50%"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

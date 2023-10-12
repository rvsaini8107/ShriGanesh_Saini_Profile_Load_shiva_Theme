import React from 'react'
import heroSection2 from "./../images/shivaSite.png"
import heroSection from "./../images/ShriGansh.png"
import "./HeroSection.css"
const HeroSection = () => {
  return (
    <div className='hero-section section'>
      <section className="herosection">
        <div className="heroSection-Left">
            <div className="hero-image-Div">
                <img src={heroSection} alt="" className="hero-Img left" />
            </div>
            <div className="hero-text-Name-Div">
                <h1 className="hero-text-Name">ShriGanesh Saini</h1>
                <h3 className="hero-text-Name">Full Stack Web Developer</h3>
            </div>
        </div>
        <div className="heroSection-Right">
            <div className="hero-image-Div">
                <img src={heroSection2} alt="" className="hero-Img right" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection

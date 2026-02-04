import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline">
            <span className="gradient-text">We're Rebranding</span>
          </h1>
          <p className="hero-subheadline">
            WorthyTen is evolving into a smarter way to buy and sell gadgets.
          </p>
          <p className="hero-supporting-text">
            Our new experience will be live soon.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

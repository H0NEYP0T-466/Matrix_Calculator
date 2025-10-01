import React from 'react'
import './Nav_bar.css'
import { useRef } from 'react';
import gsap from 'gsap';

const Nav_bar = () => {
    const navBottomRef = useRef(null);

  const handleHover = () => {
  gsap.to(navBottomRef.current, {
    height: "11vw",
    stagger: 0.1,
    duration: 0.2,
    ease: "expo.out", 
  });
};

const handleLeave = () => {
  gsap.to(navBottomRef.current, {
    height: "0vw",
    duration: 0.3,
    ease: "expo.inOut", 
  });
};

  return (
    <div id='nav'>
      <h1>MATRIX CALC.</h1>
       <div className="navpart2" 
       onMouseEnter={handleHover}
        onMouseLeave={handleLeave}>
            <div className="nav-elem">
                <h4>Operations</h4>
                <h5><span>Addition</span></h5>
                <h5><span>Subtraction</span></h5>
                <h5><span>Multiplication</span></h5>
                <h5><span>Scalar Multiply</span></h5>

            </div>
            <div className="nav-elem">
                <h4>Advanced</h4>
                <h5><span>Determinant</span></h5>
                <h5><span>Inverse</span></h5>
                <h5><span>Transpose</span></h5>
                <h5><span>Eigenvalues</span></h5>
                <h5><span>Rank</span></h5>
            </div>
            <div className="nav-elem">
                <h4>Matrix Types</h4>
                <h5><span>Square</span></h5>
                <h5><span>Diagonal</span></h5>
                <h5><span>Identity</span></h5>
                <h5><span>Symmetric</span></h5>
            </div>
            <div className="nav-elem">
                <h4>AI Helper</h4>
                <h5><span>Step by Step</span></h5>
                <h5><span>Explain Results</span></h5>
                <h5><span>Verify Work</span></h5>
                <h5><span>Learn Concepts</span></h5>
            </div>
            <div className="nav-elem">
                <h4>Features</h4>

                <h5><span>Input Matrix</span></h5>
                <h5><span>AI Analysis</span></h5>
                <h5><span>Get Solution</span></h5>
                <h5><span>Export Results</span></h5>
            </div>
            <div className="nav-elem">
                <h4>About Calculator</h4>
                <h5><span>Fast Computing</span></h5>
                <h5><span>AI Powered</span></h5>
                <h5><span>Easy to Use</span></h5>
                <h5><span>Always Accurate</span></h5>
            </div>
        </div>

     
      <div ref={navBottomRef } id="nav_bottom">
      
        
      </div>
    </div>
  )
}

export default Nav_bar

import React from 'react'
import './Page.css'
import { useNavigate } from 'react-router-dom';


const Page = () => {
  const navigate = useNavigate();

  function handelClick()
  {
    navigate('/review');
  }
  return (
    <div>
      <div id='page1'>
<h1>Solve Your M<span>
  <svg className="c-bttn__morph" viewBox="0 0 64 64" aria-hidden="false" role="img" xmlns="http://www.w3.org/2000/svg">
    <title>Matrix Calculator Icon</title>


    <path d="M20 18c-3 0-4 2-4 5v4c0 2-1 3-3 3h-2v4h2c2 0 3 1 3 3v4c0 3 1 5 4 5" 
          stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M44 18c3 0 4 2 4 5v4c0 2 1 3 3 3h2v4h-2c-2 0-3 1-3 3v4c0 3-1 5-4 5" 
          stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none"/>

    <rect x="24" y="24" width="4" height="4" fill="#fff"/>
    <rect x="30" y="24" width="4" height="4" fill="#fff"/>
    <rect x="36" y="24" width="4" height="4" fill="#fff"/>
    <rect x="24" y="30" width="4" height="4" fill="#fff"/>
    <rect x="30" y="30" width="4" height="4" fill="#fff"/>
    <rect x="36" y="30" width="4" height="4" fill="#fff"/>
    <rect x="24" y="36" width="4" height="4" fill="#fff"/>
    <rect x="30" y="36" width="4" height="4" fill="#fff"/>
    <rect x="36" y="36" width="4" height="4" fill="#fff"/>
  </svg>
</span>atrix</h1>


        <h1>
            Calculations Instantly
        </h1>
        <p>We empower students and professionals with AI-powered matrix calculations,<br /> from basic operations to advanced linear algebra — with capabilities in:</p>
        <div id="page1-something">
            <h4>Matrix Operations</h4>
            <h4>AI Explanations</h4> 
            <h4>and</h4>
            <h4>Step-by-Step Solutions</h4>
        </div>
  <div id="button-div">
      <button className="review-btn" onClick={handelClick}>

        <span className="btn-text">Calculate Now !</span>
      </button>
    </div>


        <div id="moving-div">
    <div id="blur-left"></div>
    
    <div className="move">
    <span className="icon-text">[ ]</span>
    <span className="icon-text">+</span>
    <span className="icon-text">−</span>
    <span className="icon-text">×</span>
    <span className="icon-text">|A|</span>
    <span className="icon-text">Aᵀ</span>
    <span className="icon-text">A⁻¹</span>
    <span className="icon-text">⊕</span>
</div>

<div className="move">
    
    <span className="icon-text">⌈⌉</span>
    <span className="icon-text">∑</span>

    <span className="icon-text">λ</span>
    <span className="icon-text">∇</span>
</div>

    <div id="blur-right"></div>
</div>


      </div>
    
    </div>
  )
}

export default Page
